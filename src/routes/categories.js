const express = require('express');
const categories = require('../models/categories');

const router = express.Router();

//Obtener todas las categorias
router.get("/categories", (req, res) => {
    categories.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

//Obtener una categoria por id
router.get("/categories/:id", (req, res) => {
    const { id } = req.params;
    categories.findById(id)
        .then((data) => {
            // Devolver la categoría con la URL de la imagen
            const categoryWithImageUrl = {
                _id: data._id,
                name: data.name,
                description: data.description,
                categorySex: data.categorySex,
                imageUrl: data.imageUrl // Devuelve la URL de la imagen
            };
            res.json(categoryWithImageUrl);
        })
        .catch((error) => res.json({ message: error }));
});


// Obtener productos por categoría específica
router.get("/categories/:category", (req, res) => {
    const { category } = req.params;

    categories.find({ categorySex: category }).then((data) => {
        // Devolver los productos filtrados por la categoría específica
        res.json(data);
    }).catch((error) => res.json({ message: error }));
});

module.exports = router;