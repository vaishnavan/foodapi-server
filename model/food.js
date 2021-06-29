const mongoose = require("mongoose");

//schema creation for our values
const foodSchema = new mongoose.Schema({
    shopname:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    preptime:{
        type:Number,
        required:true,
    },
    reviewCount:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},
    {timestamps:true}
)

//exporting the food schema to import in Routes
module.exports = mongoose.model('Food', foodSchema);