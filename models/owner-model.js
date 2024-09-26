const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/premiumCommercialWebsite");

const ownerSchmema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    gstin:Number,
    picture:String,
    products:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("owner",ownerSchema);