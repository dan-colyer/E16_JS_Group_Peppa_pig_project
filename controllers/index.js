const express = require('express');
const router = express.Router();

router.use('/api/papapig', require('./papapig'));
router.use('/api/mamapig', require('./mamapig'));
router.use('/api/madamGazelle', require('./madamGazelle'));
router.use('/api/canvas', require('./canvas'));

router.get('/', function(req, res){
  res.sendFile('/Users/yanren/codeclan_work/week_25(E16_JS_project)/peppa_pig/client/build/index.html' );
})

router.get('/about', function(req, res){
  res.json({data:"The 4 Larders!"});
})

module.exports = router;
