const mongoose = require('mongoose');
require('dotenv').config();

async function setDbConnection() {
   await mongoose.connect(process.env.MONGODBURL); 
}

module.exports = setDbConnection;