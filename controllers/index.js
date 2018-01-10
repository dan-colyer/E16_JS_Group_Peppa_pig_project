const path = require('path');

const express = require('express');
const router = new express.Router();

router.use(express.static(path.join(__dirname,'../client/build')));

router.use('/api/papapig', require('./papapig.js'));
router.use('/api/mamapig', require('./mamapig.js'));
router.use('/api/madamGazelle', require('./madamGazelle.js'));
router.use('/api/canvas', require('./canvas.js'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

router.get('/about', function(req, res){
  res.json({data:"The 4 Larders!"});
});

module.exports = router;
