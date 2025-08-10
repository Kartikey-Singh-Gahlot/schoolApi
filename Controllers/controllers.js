const connection = require('../Models/db.js');

const addSchool = (req, res)=>{
   const {name, address, latitude, longitude} = req.body;
   connection.query("INSERT INTO schools(name,address,latitude, longitude ) values(?, ?, ?, ?)", [name, address, latitude, longitude], (err, result)=>{
     if(err){
        res.status(500).json({
            status : false,
            message : "faild to insert data",
            details : err 
        })
     }
     else{
        res.status(201).json({
            status:true,
            message : "Successfully inserted the data",
            details : result
        })
     }
   })
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

const listSchools = (req, res)=>{
 const {latitude, longitude } = req.query;
  connection.query("SELECT * FROM schools", (err,result)=>{
     if(err){
      res.status(500).json({
         status :false,
         message :"Unable to get data",
         details : err
      })
     }
     else{
        let processed =  result.map((i)=>{
          return {...i,distance : calculateDistance(latitude/1.0,longitude/1.0, i.latitude, i.longitude)}
        });
        for(let i=0; i<processed.length; i++){
          for(let j=0; j<processed.length-i-1; j++){
            if(processed[j].distance > processed[j+1].distance){
               let temp = processed[j];
               processed[j] = processed[j+1];
               processed[j+1] = temp;
            }
          }
        }
        res.status(200).json({
         status : true,
         message : "Data Fetched successfuly",
         detail : processed
        })
     }
  });
}


module.exports = {addSchool, listSchools}