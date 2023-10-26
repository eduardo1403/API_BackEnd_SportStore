const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    categorySex:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categories', categoriesSchema)
