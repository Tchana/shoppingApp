const Shopping = require('../models/shopping.model');

//create and save an item
exports.create = (req, res)=>{
    if(!req.body.name || !req.body.price){
        res.status(404).json({
            "message":"item without name or price cannot be created"
        });
    }

    const item = new Shopping({
        name: req.body.name,
        price: req.body.price || 0,
        description: req.body.description || 'no description'
    });
    item.save()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        return res.status(500).send({
            message:'your fada. Go and solve this ${err}',
            error: err
        });
    });
};
//get all items
exports.all = (req, res)=>{
    Shopping.find()
    .then(items=>{
        res.send(items);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
};

//get one item
exports.one = (req, res)=>{
    Shopping.findById(req.params.id)
    .then(item=>{
        return res.send(item);
    })
    .catch(err=>{
        return res.status(404).send({
            message:'id not found'
        });
    });
};

//update an item
exports.update = (req, res)=>{
    if(!req.body.name){
        return res.status(400).send({
            message:'item cannot be updated'
        });
    }

    //find item and update

    Shopping.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    },{new: true} )
    .then(item=>{
        res.send(item);
    })
    .catch(err=>{
        return res.status(500).send({
            message:'an error occured $(err)'
        });
    });
    
};

//delete an item
exports.delete = (req, res)=>{
    Shopping.findByIdAndDelete(req.params.id)
    .then(item=>{
        res.send({
            message: 'item deleted'
        });
    })
    .catch(err=>{
        res.status.send({
            message: 'an error occured ${err}'
        });
    });
};

