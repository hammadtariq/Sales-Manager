var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;
var SalesmanSchema = new Schema({
    firstname: String,
    lastname: String,
    id:{type:String, unique:true},
    cellNo:Number,
    companyId:String,
    CreatedOn: { type: Date, default: Date.now() }
});

var SalesmanModel = mongoose.model('salesmans', SalesmanSchema);
//console.log(UserSchema);
function saveSalesman(salesmanFields) {
    var salesman = new SalesmanModel(salesmanFields);
    var deferred = q.defer();
    salesman.save(function (err, data) {
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
exports.saveSalesman = saveSalesman;

function findSalesman(query) {
    console.log("Query " + JSON.stringify(query));
    var deferred = q.defer();
    SalesmanModel.findOne(query, function (err, data) {
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
exports.findSalesman = findSalesman;

function getSalesmans(query) {
    var deferred = q.defer();
    SalesmanModel.find(query, function (err, data) {
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
exports.getSalesmans = getSalesmans;
