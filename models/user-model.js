const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/premiumCommercialWebsite");

const userSchmema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
    order:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean
})

module.exports = mongoose.model("user",userSchema);
