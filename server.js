require("dotenv").config() ; 
const express = require('express') ; 
const app = express() ; 

const sharedSecret = process.env.SHARED_SECRET ; 

const port = process.env.PORT  ; 

app.use(express.json()) ; 

app.listen(port, () => {
    console.log("Server is running on port "+ port ) ; 
})