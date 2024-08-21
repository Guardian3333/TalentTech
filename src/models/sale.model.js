const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Sale= new Schema( 
    {
    quantity: {
        type:Number,
        min: 1,
        max: 10000
    },
    date: {
    type:Date,
    default: Date.now,
    },
    product: {
        type:Schema.Types.ObjectId,
        ref: 'Product',
    },
    total:{
        type:Number,
        default:0,
    }
    
});

module.exports = mongoose.model('Sale', Sale);