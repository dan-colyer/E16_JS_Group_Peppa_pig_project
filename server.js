const express = require('express');
const server = express();
const parser = require('body-parser');
// const path = require('path');

//Body Parser Middleware
server.use(parser.json());
server.use(parser.urlencoded({extended:true}));

const router = require('./controllers/index.js')
server.use(router);

server.listen(3000, function(){
    console.log(`App running on port ${this.address().port}`);
});
