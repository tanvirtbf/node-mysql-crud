const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

// configure dotenv
dotenv.config({ path: '' })

const app = express()

// middlewares
app.use(morgan('dev'))

// routes
app.get('/test',(req,res)=>{
  res.status(200).send('<h1>Nodejs Mysql APP</h1>')
})

// PORT 
const PORT = process.env.PORT || 8000


// listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}` .bgCyan)
})