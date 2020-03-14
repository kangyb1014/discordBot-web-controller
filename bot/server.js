const Discord = require('discord.js');
const client = new Discord.Client();
var mongoose    = require('mongoose');
var trigger_response = require('../models/trigger_response')
const token = require('./token.js')

var dbURL = "mongodb://localhost:27017/discordBot";

mongoose.connect(dbURL,{useNewUrlParser:true},function(err){
	if(err)
		console.log(err)
})

var getPongs = function(str,callback){
	var query = {ping:str} 

	trigger_response.findOne(query,function(err,res){
		if(err)
			console.log(err)
		else if (!res)
			console.log('no matches')
		else
			callback(res['pong'])
	})
	
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
	if(msg.author.bot == false){
		getPongs(msg.content,function(result){
				console.log(result)
				if(result.length > 0){
					var ret = result[Math.floor(Math.random() * result.length)]
					msg.reply(ret)		
				}
		})
	}
});


client.login(token.token);

