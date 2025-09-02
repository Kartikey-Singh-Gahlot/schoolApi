const schoolsModel = require('../Models/schoolModel.js');

const addSchool =  async (req, res)=>{
   const {name, address, latitude, longitude} = req.body;
   try{
      const school = new schoolsModel({name, address, latitude, longitude});
      await school.save();
      res.status(200).json({
         status:true,
         body : "School Listing Created",
         details : school
      })
   }
   catch(err){
      res.status(400).json({
         status:false,
         body:err
      })
   }
  } ;


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}


const listSchools =async  (req, res)=>{
 const {latitude, longitude } = req.query;
 try{
   const data = await schoolsModel.find({});
   const processedData = data.map((i)=>{
    return {...i, distance:calculateDistance(parseFloat(latitude), parseFloat(longitude), i.latitude, i.longitude)}
    });
   for(let i=0; i<processedData.length; i++){
      for(let j=0; j<processedData.length-i-1; j++){
        if(processedData[j].distance > processedData[j+1].distance){
           let temp = processedData[j];
           processedData[j] = processedData[j+1];
           processedData[j+1] = temp;
        }
      }
   }
   res.status(200).json({
    status : true,
    message : "Data Fetched successfuly",
    detail : processedData
   })
 }
 catch(err){
   res.status(500).json({
      status :false,
      message :"Unable to get data",
      details : err 
   })
 }
 
}


module.exports = {addSchool, listSchools}