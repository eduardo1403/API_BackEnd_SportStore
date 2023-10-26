const express = require('express');
const users = require('../models/users')

const router = express.Router();

//crear usuario
router.post("/users", (req, res) => {
    const user = users(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});

//Obtener todo usuarios
router.get("/users", (req, res) => {
    users.find().then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});

//Obtener un usuario por id
router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    users.findById(id).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});


//Actualizar usuario por id
router.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const {name, lastName,email, password} = req.body;
    users.updateOne({ _id: id}, {$set : {name, lastName, email, password}}).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});

//Eliminar usuario por id
router.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    users.deleteOne({ _id: id}).then((data) => res.json(data)).catch((error) => res.json( {message: error}))
});



module.exports = router;