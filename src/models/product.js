const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    categorySex:{
        type: String
    },
    precio:{
        type: Number
    },
    imageUrl:{
        type: String
    },
    categoryID:{
        type: String
    },
    inventario:[
        {
            talla:{
                type: String
            },
            inventario:{
                type: Number
            }
        }
    ],
    tags:{
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema)
/* 
{"_id":{"$oid":"64b9b48f4d452e41ea01a001"},
"title":"Legging suave ",
"description":"Legging deportivo para dama de tela suave ",
"categorySex":"woman",
"precio":{"$numberDouble":"400.0"},
"imageUrl":"1.jpg",
"categoryID":"64b9b35fbf5918cd000b14c1",
"inventario":[{"talla":"xs",
"inventario":{"$numberInt":"10"}},{"talla":"s","inventario":{"$numberInt":"5"}},{"talla":"m","inventario":{"$numberInt":"15"}},{"talla":"l","inventario":{"$numberInt":"8"}},{"talla":"xl","inventario":{"$numberInt":"6"}}],
"tags":"legging deportivo para dama de tela suave "}
*/