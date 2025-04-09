const express = require('express')
const app = express()
const connection = require('./models/db')
require('dotenv').config()




app.get('/',(req,res)=>{
    res.send('This is the server')
})


app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})
