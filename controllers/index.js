const path = require('path');

const express = require('express');
const router = new express.Router();

router.use(express.static(path.join(__dirname,'../client/build')));

router.use('/papapig', require('./papapig.js'));
router.use('/mamapig', require('./mamapig.js'));
router.use('/madamGazelle', require('./madamGazelle.js'));
router.use('/canvas', require('./canvas.js'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

router.get('/about', function(req, res){
  res.json({data:"The 4 Larders!"});
});

module.exports = router;
