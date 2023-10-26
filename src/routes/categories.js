const express = require('express');
const categories = require('../models/categories');

const router = express.Router();

//Obtener todas las categorias
router.get("/categories", (req, res) => {
    categories.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

//Obtener una categoria por id
router.get("/categories/:id", (req, res) => {
    const {id} = req.params;
    categories.findById(id).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});


//Obtener una categoria por nombre
router.get("/categories/:name", (req, res) => {
    const {name} = req.params;
    categories.findOne({name: name}).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});


module.exports = router;