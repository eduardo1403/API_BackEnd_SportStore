const express = require('express');
const Joi = require('@hapi/joi');
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



//Obtener un usuario por email y password
router.use(express.json());

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por su correo electrónico
    const user = await users.findOne({ email });

    // Verificar si el usuario existe y si la contraseña coincide
    if (user && user.password === password) {
      // Credenciales válidas, enviar los datos del usuario en la respuesta
      return res.status(200).json(user);
    } else {
      // Credenciales inválidas, enviar un mensaje de error
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    // Manejar errores, por ejemplo, problemas con la base de datos
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
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