const mongoose = require('mongoose');

const schoolsSchema = new mongoose.Schema({
    name : {type:String, required:[true, "name of thee school is required"]},
    address :{type:String, required:[true, "address of the school is required"]},
    latitude :{type:Number,required:[true, "latitude of the school is required"]},
    longitude : {type:Number, required:[true, "logitude of the school is required"]}
});

module.exports = new mongoose.model("schools", schoolsSchema);