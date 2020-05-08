module.exports = function(app)
{
    var trigger_response = require(__dirname+'/../../models/trigger_response')
    
    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/index.html',function(req,res){
        res.render('index.html');
    });
    app.get('/server/channel/trigger_response/all',function(req, res){
        var query = req.body
        trigger_response.find(query, function(err, trigger_response_list){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(trigger_response_list);
        })        
    })

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
        trigger_response.deleteOne({_id:req.params.id},function(err,result){
            console.log(result)
            if(err) return res.status(500).send({error: 'database failure'});
            res.send(result);
        })
    })

}
