module.exports = function(app){
	const express = require('express');
	const router = express.Router();
	const user = require(__dirname+'/../../models/user')
	
	app.get('/signup', function(req, res) {
 	 	res.render("login.ejs");
	});

	app.post("/signup", function(req,res){
		user.create({
    		name: req.body['userName'],
    		email: req.body['userEmail'],
    		password: req.body['password']
  			},function(err,result){
				if(err) return res.status(500).send({error: 'database failure'});
  	 			res.send(result);	
		})  
    })
    
    
    //로그인 뷰
    app.get('/login.ejs',function(req,res){
        res.render('login.ejs')
    })

    //로그인 post
    app.get("")

}


