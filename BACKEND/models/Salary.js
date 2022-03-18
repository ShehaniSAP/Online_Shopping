const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
    name : {
       type : String,
       required: true

   },
   
   category: {
       type: String,
       required: true
   },
   eno: {
       type: String,
       required: true
   },
   allowance: {
       type: Number,
       required: true
   },
   
  
})

const Salary = mongoose.model("Salary",salarySchema);

module.exports = Salary;