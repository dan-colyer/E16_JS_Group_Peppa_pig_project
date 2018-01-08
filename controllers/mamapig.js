const express = require('express');
const mamapigRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("peppa_pigs");

  console.log('Connected to database');

  //Index
  mamapigRouter.get('/', function(req, res){
    db.collection('animals').find().toArray( function( err, result ){

      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      // const randomNumber = function(max) {
      //   return Math.floor(Math.random() * Math.floor(max));
      // }
      // const randomAnimal = randomNumber(db.collection('animals').find().toArray.length)
      res.json(result);
    })
  })

})

module.exports = mamapigRouter;
