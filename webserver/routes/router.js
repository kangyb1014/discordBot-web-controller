module.exports = function(app)
{
	var trigger_response = require(__dirname+'/trigger_response')(app)
	
	var user = require(__dirname+'/user')(app)
}
