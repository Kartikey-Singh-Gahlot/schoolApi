const { listSchools } = require('../Controllers/controllers.js');
const connection = require('../Models/db.js');

const addSchoolValidation =  (req, res, next)=>{
    const {name, address, latitude, longitude} = req.body;
    if( !name || !address ){
       res.status(400).json({
         status : false,
         message : "Incomplete data",
         details : "Name and Address are required"
       })
    }
    else{
        connection.query("SELECT * FROM schools WHERE name = ? && address = ? ", [name, address], (err, result)=>{
           if(result.length>0){
            res.status(500).json({
                status : false,
                message :"Failed to insert data",
                details : "Entery already exists"
            })
           }
            else{
                next();
            }
        });
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