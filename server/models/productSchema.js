var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    productName: String,
    productQuantity:Number,
    id:{type:String, unique:true},
    status:String,
    companyId:String,
    CreatedOn: { type: Date, default: Date.now() }
});

var ProductModel = mongoose.model('products', ProductSchema);
function saveProducts(productFields) {
    var product = new ProductModel(productFields);
    var deferred = q.defer();
    product.save(function (err, data) {
        if (err) {
            console.log('Error Occured in Save' + err);
            deferred.reject('Error occured due to '+err.message);
        }
        else {
            console.log('Successfully Save Data' + data);
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
exports.saveProducts = saveProducts;

function findProducts(query) {
    console.log("Query " + query);
    var deferred = q.defer();
    ProductModel.findOne(query, function (err, data) {
        if (err) {
            console.log('Error Occured in Find' + err);
            deferred.reject('Error Occured in Find');
        }
        else {
            console.log("this is data");
            console.log(data);
            console.log('Successfully Find Data' + data);
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
exports.findProducts = findProducts;

function getProducts(query) {
    var deferred = q.defer();
    ProductModel.find(query, function (err, data) {
        if (err) {
            console.log('Error Occured in Find' + err);
            deferred.reject('Error Occured in Find');
        }
        else {
            console.log("this is data");
            console.log(data);
            console.log('Successfully Find Data' + data);
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
exports.getProducts = getProducts;
