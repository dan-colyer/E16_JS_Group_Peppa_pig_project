const express = require('express');
const router = express.Router();

router.use('/api/papapig', require('./papapig.js'));
router.use('/api/mamapig', require('./mamapig.js'));
router.use('/api/madamGazelle', require('./madamGazelle.js'));
router.use('/api/canvas', require('./canvas.js'));

router.get('/', function(req, res){
  res.json({data:"Welcome to Peppa's family!"});
})

router.get('/about', function(req, res){
  res.json({data:"The 4 Larders!"});
})

module.exports = router;
