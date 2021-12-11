const express = require('express')
const app = express()
const port = 4000
// path can handle some routing requests
const path = require('path');
// Body parser allows us to extraxt data from html bodies
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/name', (req, res)=>{
    res.send("Hello " + req.body.fname + " " + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})