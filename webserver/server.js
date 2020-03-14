
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var trigger_response = require('../models/trigger_response')
var dbURL = "mongodb://localhost:27017/discordBot";
mongoose.connect(dbURL,{useNewUrlParser:true},function(err){
	if(err)
		console.log(err)
})

app.use(express.json())
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//app.use('/', require(router(app)))

var router = require('./router')(app);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});