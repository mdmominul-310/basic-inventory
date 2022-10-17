const expres = require('express');
const app = expres();
const cors = require('cors');
const mongoose = require("mongoose");


//middleware
app.use(expres.json());
app.use(cors());

//routes
const productRoute = require('./Routes/product.route')
app.get("/", (req, res) => {
    res.send('route is working');
});

//posting to database
app.use('/api/v1/product', productRoute)



module.exports = app;