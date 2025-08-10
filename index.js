const express = require('express');
const cors = require('cors');
const app = express();
const Routes = require('./Routes/routes.js');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin:true}));



app.use("/", Routes);

module.exports = app;
