const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const app = express()


app.use(cors());
//importar rutas
const productRoutes = require('./routes/product.routes');
//conectarnos a mongoose
const salesRoutes = require('./routes/sale.routes');

require('dotenv').config();

mongoose.connect(process.env.DB_URL)
.then(db => console.log('Conectado a MongoDB'))
.catch(err => console.log(err));

//
app.use(express.urlencoded({extended: false}));


//configurar rutas
app.use('/products', productRoutes);
app.use('/sales', salesRoutes);

//app.get('/', function (request, response) {
//    response.send('Hello World')
//})


app.listen(3000, ()=>{
    console.log('ServER Running')});