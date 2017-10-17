var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/averageBar', function(req, res, next) {
    res.render('averageBar', { title: 'Express' });
});
router.get('/averageMFBar', function(req, res, next) {
    res.render('averageMFBar', { title: 'Express' });
});
router.get('/agePie', function(req, res, next) {
    res.render('agePie', { title: 'Express' });
});
router.get('/elevationScatter', function(req, res, next) {
    res.render('elevationScatter', { title: 'Express' });
});
router.get('/humidityScatter', function(req, res, next) {
    res.render('humidityScatter', { title: 'Express' });
});
router.get('/tempScatter', function(req, res, next) {
    res.render('tempScatter', { title: 'Express' });
});
router.get('/map', function(req, res, next) {
    res.render('map', { title: 'Express' });
});
router.get('/topTimesBar', function(req, res, next) {
    res.render('topTimesBar', { title: 'Express' });
});
module.exports = router;
