var express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('Message', (msg) => {
            socket.broadcast.emit('Message', msg);
    })      
});

server.listen(3000, () => {
    console.log(`Listening to port 3000`)
});
