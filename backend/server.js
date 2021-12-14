const express = require('express')
const app = express()
const port = 4000
// path can handle some routing requests
const path = require('path');
// Body parser allows us to extraxt data from html bodies
const bodyParser = require("body-parser");
// Importing cors, allows JS execution remotely between domains
const cors = require('cors');
// importing mongoose so our node server can communicate with the DB
const mongoose = require('mongoose');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Getting a handle on cors
app.use(cors());
// now we can access the server from the front end
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const connectionString = "mongodb+srv://admin:admin@cluster0.ilny4.mongodb.net/myEventsProj?retryWrites=true&w=majority";
// Connecting to the DB via mongoose
mongoose.connect(connectionString, {useNewUrlParser: true});

// Defining the schema
const Schema = mongoose.Schema;
const mySchema = new Schema({
  Title:String,
  Message:String,
  Date:String,
  File: String 
})

// Creating model for the DB. This is also the handle when wanting to interact with the DB
var eventsModel = mongoose.model("event", mySchema);

app.get('/api/events', (req, res) => {
  // Searching the DB and returning any found data
  eventsModel.find((err, data)=>{
    res.json(data);
  })
})

// Edit event
app.get('/api/events/:id', (req, res)=>{
  console.log(req.params.id)

  eventsModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})

// Updating an entry, call gets made from edit.js
app.put('/api/events/:id', (req, res)=>{
  // get the object id via paramaters, get body of html, override record - true
  eventsModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data)=>{
    res.send(data); // We do nothing with this data, it's purely to see out the promise
  })
})

// Delete method
app.delete('/api/events/:id', (req, res)=>{
  eventsModel.findByIdAndDelete(req.params.id, (err, data)=>{
    res.send(data); // We do nothing with this data, it's purely to see out the promise
  })
})

// Adding event to mongoDB app.post('/api/events', upload.single("eventImage"),(req, res)
app.post('/api/events',(req, res) => {
  eventsModel.create({
    Title: req.body.Title,
    Message: req.body.Message,
    Date: req.body.Date,
    File: req.body.File
  })
  // Confirming upload
  res.send("Event added")
})

// Server listening on port 4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})