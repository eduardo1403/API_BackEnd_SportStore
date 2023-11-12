const express = require('express');
const products = require('../models/products');

const router = express.Router();

//Obtener todo productos
router.get("/products", (req, res) => {
    products.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});


// Obtener productos por categoría específica
router.get("/products/:category", (req, res) => {
    const { category } = req.params;

    products.find({ categorySex: category }).then((data) => {
        // Devolver los productos filtrados por la categoría específica
        res.json(data);
    }).catch((error) => res.json({ message: error }));
});








module.exports = router;

