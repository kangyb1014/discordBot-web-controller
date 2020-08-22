module.exports = function(app)
{
    var trigger_response = require(__dirname+'/../models/trigger_response')

    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/index.html',function(req,res){
        res.render('index.html');
    });
    app.get('/server/channel/trigger_response',function(req, res){
        var query = req.body
        trigger_response.find(query, function(err, trigger_response_list){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(trigger_response_list);
        })        
    })

    //로그인 뷰
    app.get('/login.html',function(req,res){
        res.render('login.html')
    })

    //로그인 post
    app.get("")

    app.post('/server/channel/trigger_response',function(req,res){
        trigger_response.create({
            ping : req.body['ping'],
            pong : req.body['pong']
            }, function (err, result) {
                console.log(result)    
                if(err) return res.status(500).send({error: 'database failure'});
                res.send(result);
          });
    })

    app.put('/server/channel/trigger_response/:id',function(req,res){
        trigger_response.updateOne({_id:req.params.id},{
            ping : req.body['ping'],
            pong : req.body['pong']
        },function(err,result){
            console.log(result)
            if(err) return res.status(500).send({error: 'database failure'});
            res.send(result);
        })

    })

    app.delete('/server/channel/trigger_response/:id',function(req,res){
        //null값 들어왔을때 레코드 삭제되는 예외처리
        if({_id:req.params.id == null}){
            return res.status(500).send({error: 'database failure'});
        }
        trigger_response.deleteOne({_id:req.params.id},function(err,result){
            console.log(result)
            if(err) return res.status(500).send({error: 'database failure'});
            res.send(result);
        })
    })
      
}
