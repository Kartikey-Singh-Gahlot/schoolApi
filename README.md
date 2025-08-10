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
- "/addSchool" : adds new School to the api ( takes in name, address, lattitude and longitude  as parameters )
- "/listSchool" : checks the nearby school ( takes in lattitude and longitude of the person as parameters )
