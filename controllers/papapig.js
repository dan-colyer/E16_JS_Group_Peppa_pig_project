const express = require('express');
const papapigRouter = new express.Router();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("peppa_pigs");

  console.log('Connected to database');
  
  //Index
  papapigRouter.get('/', function(req, res){
    db.collection('cities').find().toArray( function( err, result ){

      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }

      res.json(result);
    })
  })

})

module.exports = papapigRouter;
