const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Product =new Schema({
    ref:String,
    name:String,
    description:String,
    price:Number,
    quantity:Number,
    image:String,
    isAValid:Boolean
})

module.exports = mongoose.model('Product' , Product)