var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

    app.get('/',function(req,res) {
    console.log('client');    
    res.sendFile(__dirname + '/socket_ex1.html'); 

    });


    io.on('connection', function(socket) {
        console.log('Server Socket Connected');

        socket.on('hello', function(data) {
            console.log('client : ', data);
            socket.emit('reponse','hello: 안녕하세요?');
            
        });

        socket.on('study', function(data) {
            console.log('client : ', data);
            socket.emit('reponse','study: 공부하자!');
        });

        socket.on('bye', function(data) {
            console.log('client : ', data);
            socket.emit('reponse','bye: 잘가!');
        });

});


http.listen(8000,function() {
    console.log('Listening on : ' , 8000);
});