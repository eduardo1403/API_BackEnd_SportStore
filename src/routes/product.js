const express = require('express');
const Product = require('../models/product');

const router = express.Router();

//Obtener todas los productos
router.get("/product", (req, res) => {
    Product.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

//Obtener un producto por id
router.get("/product/:id", (req, res) => {
    const {id} = req.params;
    Product.findById(id).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});

module.exports = router;