const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const colors = require('colors');


const app = require("./app");

//database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log("Database connection succesfull")
});


//server 
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('app is running port '.green.bold + port.yellow.bold);
})

