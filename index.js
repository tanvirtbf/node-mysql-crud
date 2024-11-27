const express = require('express')

const app = express()

// middlewares

// routes
app.get('/test',(req,res)=>{
  res.status(200).send('<h1>Nodejs Mysql APP</h1>')
})

// PORT 
const PORT = 8080


// listen
app.listen(PORT, () => {
  console.log('Server Running')
})