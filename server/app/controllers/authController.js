var express = require('express');
var Firebase = require('firebase');
var firebaseRef = new Firebase("https://salesmanap.firebaseio.com");
var UserSchema_1 = require('./../../models/userSchema');
var SalesmanSchema = require('./../../models/salesmanSchema');

exports.signup = function(req, res){
    var data = req.body.data;
    firebaseRef.createUser({
        email: data.email,
        password: data.pass
    }, function(error, userData) {
        if (error) {
            switch (error.code) {
                case "EMAIL_TAKEN":
                    res.json({message:"This Email Id is already registerd!"});
                    break;
                case "INVALID_EMAIL":
                    res.json({message:"The specified email is not a valid email."});
                    break;
                default:
                    res.json({message:"Error creating user"});
            }
        } else {
            data.FirebaseToken = userData.uid;
            UserSchema_1.saveUser(data)
                .then(function(userData){
                    return res.json({success : true, "message" : "Registered Successfully!", user: userData});
                },function(err){
                    return res.json({success : false, "message" : err});
                });
        }
    });
};

exports.login = function(req, res){
    var user = req.body.data;
    UserSchema_1.findUser({ email: user.email })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No user found with supplied email"});
            }
            else if (userInstance.pass == user.pass) {
                return res.json({success:true, message: "Logged In successfully", user: userInstance});
            }
            else {
                return res.json({success:false, message: "Wrong Password", user: ''});
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};


exports.loginSalesman = function(req, res){
    var salesman = req.body;
    console.log('in login salesman>>>>>> ',req.body);
    SalesmanSchema.findSalesman({ id: salesman.id })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No salesman found with supplied email"});
            }
            else {
              return res.json({success:true, message: "Logged In successfully", data: userInstance });
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};

exports.logout = function(req,res){
    return res.json({success:true, message: "Logged Out successfully"});
};

