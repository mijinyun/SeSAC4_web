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
            
        });

        socket.on('study', function(data) {
            console.log('client : ', data);
        });

        socket.on('bye', function(data) {
            console.log('client : ', data);
        });

});


http.listen(8000,function() {
    console.log('Listening on : ' , 8000);
});