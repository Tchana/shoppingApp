module.exports = (app)=>{
    const shopping = require('../controllers/shopping.controller');

    //create a new item

    app.post('/item', shopping.create);

    //retriece all items
    app.get('/items', shopping.all);

    //retrieve a single item
    app.get('/items/:id', shopping.one)

    //update an item
    app.put('/item/:id', shopping.update)

    //delete an item
    app.delete('/item/:id', shopping.delete)
}