const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewURlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection success!");
})

const employeeRouter = require("./routes/employees.js");
const salaryRouter = require("./routes/salary.js");



app.use("/employee",employeeRouter);
app.use("/salary",salaryRouter)

app.listen(PORT, () => {
    console.log(`Server is  running on port number: ${PORT}`)
})



