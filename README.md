# Introduction
A simple api for adding a school listing and checking the nearby school in the database

# Technology and Tools Used
- Node.js
- Express.js
- mysql2 package
- nodemon package
- cors package
- dotenv package
- Railway ( hosting the database)

# Endpoints

## Base Url : https://school-api-self.vercel.app/
### Method Post
- "/addSchool" : adds new School to the api ( takes in name, address, lattitude and longitude  as parameters )
- Parameters : name, address, latitude, longitude
- e.g. :-
  POST /addSchool
  
{
  "name": "Green Valley Public School",
  "address": "123 Main Street, Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}

### Method Get

- "/listSchool" : checks the nearby school ( takes in lattitude and longitude of the person as parameters )
-  Parameters : latitude, longitude 
- e.g. :-
  GET /listSchool?latitude=28.7041&longitude=77.1025


# Postman Collection 
- [schoolApi Postman ](https://decten-kartz-4649904.postman.co/workspace/Kartikey's-Workspace~39d72905-4c2e-4cd6-83cf-c6ba612ef2f0/collection/47475217-a6fcdaf1-b512-42a1-a2a9-4f390e695ab7?action=share&source=copy-link&creator=47475217)
