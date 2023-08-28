const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,    
    blog_id: Number,
    blog_name: String,
    blog_disc: String,
    blog_date: Date,
    blog_author: String,
    blog_category: String

})


module.exports = mongoose.model('blogs',blogSchema)