const express = require('express');
const aboutRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;

let index = 0;

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("peppa_pigs");

  console.log('Connected to database');

  //Index
  aboutRouter.get('/', function(req, res){
    db.collection('larders').find().toArray( function( err, result ){

      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      index++;
      if (index === 4) {
        index = 0;
      }
      res.json(result[index]);
      console.log(result[index]);
    })
  })

})

module.exports = aboutRouter;
