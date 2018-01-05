const express = require('express');
const papapigRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/peppa_pigs', function(err, database){
  if (err) return;
  db = databse;
});

//Index
papapigRouter.get('/', function(req, res){
  db.collection('cities').find().toArray( function( err, results ){

    if(err) {
      console.log("Error: " + err.toString());
      res.json( false );
    }

    res.json(results);
  })

});


module.exports = papapigRouter;
