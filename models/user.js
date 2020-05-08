var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user_schema = new mongoose.Schema({
	name: {
     	type: String
    },
    email: {
      	type: String
    },
    password: {
      	type: String,
    },
    salt:{
      	type: String
    }
});

module.exports = mongoose.model('user',user_schema,'user');
                                                                                                           
