var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: {type: String, unique: true},
    pass: String,
    companyName:String,
    CreatedOn: { type: Date, default: Date.now() },
    FirebaseToken: String
});

var UserModel = mongoose.model('users', UserSchema);
//console.log(UserSchema);
function saveUser(userFields) {
    var user = new UserModel(userFields);
    var deferred = q.defer();
    user.save(function (err, data) {
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
exports.saveUser = saveUser;

function findUser(query) {
    console.log("Query " + query);
    var deferred = q.defer();
    UserModel.findOne(query, function (err, data) {
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
exports.findUser = findUser;