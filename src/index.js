const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const productRouter = require('./routes/product');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', productsRouter);
app.use('/api', categoriesRouter);
app.use('/api', productRouter);


//routes
app.get("/", (req, res) => {
    res.send('Welcome to the API')
});


//conexion a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB Atlas')).catch((error) => console.error(error));




app.listen(port, () => console.log('Server listen on port', port));