const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//create our express app
const app = express();
//parse request of content  type
app.use(bodyParser.urlencoded({extended: true}));
//parse request of content type application/json
app.use(bodyParser.json());

//configuring the database
const dbconfig = require('./config/database.config');
mongoose.Promise = global.Promise

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log('successful connected to the database');
}).catch(err=>{
    console.log('could not connect to the database because ${err}');
    process.exit();
})

//define a simple route
app.get('/', (req, res)=>{
    res.status(200).json({
        "message": "Welcome to our shopping app!"
    });
});

require('./app/routes/shopping.route')(app);

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
});

