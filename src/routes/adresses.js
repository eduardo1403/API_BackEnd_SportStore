const express = require('express');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const adresses = require('../models/adresses');

const router = express.Router();




router.get("/adresses/:id", async (req, res) => {
    const {id} = req.params;

    // Obtener el documento de la dirección
    const adresse = await adresses.find({
    clienteID: id
    });

    // Si el documento existe, devolver los datos
    if (adresse) {
    res.json(adresse);
    } else {
    // Si no existe el documento, devolver un mensaje de error
    res.status(404).send("No tienes direcciones agregadas");
    }
});




module.exports = router;