var restify = require('restify');
var server = restify.createServer();
var io = require('socket.io')(server.server);
//server.use(restify.bodyParser());

server.get('/notify/:cell', function(req, res, next){
    //console.log(req.params.cell);
    var cellphone = req.params.cell;
    io.emit('new_call',cellphone);
    res.send(200);
});

server.listen(50780, function() {
    console.log('%s listening at %s', server.name, server.url);
});