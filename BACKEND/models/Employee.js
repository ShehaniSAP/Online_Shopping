const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
     name : {
        type : String,
        required: true

    },
    
    address: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    
    designation:{
        type:String,
        required: true
    },

    mail:{
        type:String,
        required: true
    },

    type:{
        type:String,
        required: true
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;