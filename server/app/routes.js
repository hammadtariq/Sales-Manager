var express = require('express');
var router = express.Router();
var authController = require('./controllers/authController');
var getSetController = require('./controllers/getSetController');

router.post('/login',authController.login);
router.post('/signup',authController.signup);
router.post('/loginSalesman',authController.loginSalesman);
router.post('/addSalesman',getSetController.addSalesman);
router.post('/addProducts',getSetController.addProducts);
router.post('/getProduct',getSetController.getProduct);

router.get('/logout',authController.logout);
router.get('/getAllProducts',getSetController.getAllProducts);
router.get('/getAllSalesmans',getSetController.getAllSalesmans);

router.get('/login',function(req,res){
    res.redirect('/#login');
});

router.get('/signup',function(req,res){
    res.redirect('/#signup');
});

module.exports = router;
