const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    cat_id:Number, 
    cat_name:String
})


module.exports = mongoose.model('categories', categorySchema)