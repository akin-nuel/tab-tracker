console.log("Hello")
const express = require('express')
// allows you process json file properly and easily
const bodyParser = require('body-parser')
const cors = require('cors')
// generates logs for incoming requests 
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const PORT = 8080

app.post("/register", (req, res)=> {
    res.send({
        message: `Hello ${req.body.name}, ${req.body.email} has been registered. Welcome to the platform. Have a great day`
    })
})

app.listen(PORT, ()=> {
    console.log('Server is live')
})