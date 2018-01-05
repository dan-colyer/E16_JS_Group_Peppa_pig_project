const express = require('express');
const server = express();
const parser = require('body-parser');

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));
server.use(express.static('client/build'));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client){
  
  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });

  if(err) {
    console.log(err);
    return;
  }

  const db = client.db("peppa_pigs");
  console.log("Connect to database");

  //show all

  //show one

  //add an item

  //delete all


})
