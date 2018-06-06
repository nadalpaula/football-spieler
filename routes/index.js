var express = require('express');
var router = express.Router();

/* GET home page. */
const homeController = require('../controllers/homeController')
const addController = require('../controllers/addController')

router.get('/', homeController.home)

router.put('/', homeController.like)

router.get('/add', function (req, res) {
  res.render('add');
});

router.post('/add', addController.add)









module.exports = router;
