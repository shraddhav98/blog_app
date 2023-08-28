const mongoose = require('mongoose');

const subcriberSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    sub_id: Number,
    sub_name: String,
    sub_email: String
})

module.exports = mongoose.model('subscribers', subcriberSchema);