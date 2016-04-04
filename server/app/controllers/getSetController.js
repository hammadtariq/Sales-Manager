var express = require('express');
var Firebase = require('firebase');
var firebaseRef = new Firebase("https://salesmanap.firebaseio.com");
var SalesmanSchema = require('./../../models/salesmanSchema');
var ProductSchema = require('./../../models/productSchema');

exports.addSalesman = function(req, res){
    var data = req.body.data;
    var salesmanRef = firebaseRef.child("Salesmans");
    salesmanRef.child(data.id).set({
        firstname: data.firstname,
        lastname: data.lastname,
        addedOn: Date.now(),
        cellNo:data.cellNo
    });
    SalesmanSchema.saveSalesman(data)
        .then(function(salesmanData){
            return res.json({success : true, "message" : "Registered Successfully!", user: salesmanData});
        },function(err){
            return res.json({success : false, "message" : err});
        });
};

exports.getAllSalesmans = function(req, res){
    var companyId = req.query.companyId;
    SalesmanSchema.getSalesmans({ companyId: companyId })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No salesman found"});
            }
            else{
                return res.json({success:true, message: "found all data successfully", data: userInstance });
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};

exports.addProducts = function(req, res){
    var data = req.body.data;
    data.productStatus = 'available';
    var productRef = firebaseRef.child("Products");
    productRef.child(data.id).set({
        Name: data.productName,
        quantity:data.productQuantity,
        status:data.productStatus,
        addedOn: Date.now()
    });
    ProductSchema.saveProducts(data)
        .then(function(productData){
            return res.json({success : true, "message" : "Added Successfully!", user: salesmanData});
        },function(err){
            return res.json({success : false, "message" : err});
        });
};

exports.getAllProducts = function(req, res){
    var companyId = req.query.companyId;
    ProductSchema.getProducts({ companyId: companyId })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No product found"});
            }
            else{
                return res.json({success:true, message: "found all data successfully", data: userInstance });
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};

exports.getProduct = function(req, res){
    var product = req.body;
    ProductSchema.findProducts({ id: product.id })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No product found with that id"});
            }
            else{
                return res.json({success:true, message: "found successfully", data: userInstance });
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};