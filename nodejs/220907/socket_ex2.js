var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

    app.get('/',function(req,res) {
    console.log('client');    
    res.sendFile(__dirname + '/socket_ex2.html'); 

    });

    //io -> 클라이언트와의 모든 연결을 갖고 있는 친구
    // socket -> 클라이언트 한명. socket.id 클라이언트를 구분하는 식별자


    io.on('connection', function(socket) {
        console.log('Connected',socket.id);
        socket.emit('info',socket.id);
        // 서버가 클라이언트에게 식별자를 보내주는것 
        io.emit('notice',socket.id + "님이 입장하셨습니다.");
        socket.on('send',function(data) {
            //data = {id: ~~, msg:~~~} 로 넘어옴.
            console.log('client message : ', data.msg);
            //모두에게 보내는 메세지니까 io.emit!
            io.emit('newMessage',data);

        });

        // 연결이 끊겼을때,
        socket.on('disconnect',function(){
            io.emit('notice',socket.id + "님이 퇴장하셨습니다.");
        })

    });


    http.listen(8000,function() {
        console.log('Listening on : ' , 8000);
    });