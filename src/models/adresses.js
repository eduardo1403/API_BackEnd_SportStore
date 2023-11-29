const mongoose = require('mongoose');

const addressesSchema = mongoose.Schema({
    clienteID:{
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true,
        
    },
    municipio:{
        type: String,
        required: true
    },
    colonia:{
        type: String,
        required: true
    },
    calle:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    indicaciones:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('addresses', addressesSchema)

