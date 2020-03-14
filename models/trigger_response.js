var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trigger_response_schema = new mongoose.Schema({
    index: Number,
    server: String,
    channel: String,
    ping:  [String],
    pong:  [String]
});

module.exports = mongoose.model('trigger_response', trigger_response_schema,'trigger_response');