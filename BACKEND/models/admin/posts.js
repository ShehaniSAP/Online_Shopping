const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    holdername:{
        type:String,
        required:true
    },
    cardnumber:{
        type:String,
        required:true
    },
    totalamount:{
        type:String,
        required:true
    },
    cardvalidation:{
        type:String,
        required:true
    },
    paymentmethod:{
        type:String,
        required:true
    },
    expiredate:{
        type:String,
        required:true
    }



});

module.exports = mongoose.model('Posts',postSchema)