require("dotenv").config() ; 

const express = require('express') ; 
const app = express() ; 
const client = require("./framework/database/redis/connection") ; 
const otp = require('./utils/otp'); 
const port = process.env.PORT ; 


const user = 4 ; 
client.set(user, otp , (err) => {
    if(err) 
     console.log("Someting went wrong here"); 
    else 
     console.log("OTP was stored"); 
})

app.use(express.json()) ; 

app.listen(port, () => {
    console.log("Server is running on port "+ port ) ; 
})