const schoolModel = require('../Models/schoolModel.js');

const addSchoolValidation = async  (req, res, next)=>{
    const {name, address, latitude, longitude} = req.body;
    if( !name || !address ){
       res.status(400).json({
         status : false,
         message : "Incomplete data",
         details : "Name and Address are required"
       })
    }
    else{
        try{
         await schoolModel.find({name, address});
         next();
        }
        catch(err){
              res.status(500).json({
                status : false,
                message :"Failed to insert data",
                details : "Entery already exists"
              })
        }
    }
}

const listSchoolsValidation = (req, res, next)=>{
   const {latitude, longitude} = req.query;
   if(!latitude || !longitude){
     res.status(400).json({
        status:false,
        message : "Unable to fetch data",
        details : "lattitude and logitidue is required"
     })
   }
   else{
     next();
   }
   
}


module.exports = {addSchoolValidation, listSchoolsValidation};