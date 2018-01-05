const express = require('express');
const server = express();
const parser = require('body-parser');

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));

server.use(require('./controllers/index'));

server.listen(3000, function(){
    console.log("Listening on port 3000");
});
