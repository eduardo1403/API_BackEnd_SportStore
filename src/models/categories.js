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

/* 
{"_id":{"$oid":"64233435263039f1474ce423"},
"name":"Playeras deportivas",
"description":"Las mejores playeras deportivas a los mejores precios ","categorySex":"man",
"imageUrl":"41590kvBQ3L._AC_SX679_.jpg"}
*/