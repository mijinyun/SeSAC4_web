var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res) {
    console.log('client');    //접속시 실행
    res.sendFile(__dirname + '/index.html');   
    // ejs 를 설치하지않아서 sendFile로 설정! ejs설치했으면 그냥 render로 함.

});

io.on('connection',function(socket) {    //html파일에서 socket.io와 연결이 된 것 //연결이 된 클라이언트 한명!
    console.log('connected');
    socket.emit('hello','server hello');    //emit = write  //hello라는 곳에 server hello를 보낼 거임 // 이벤트명이 동일해야지만 받을 수 있음.

    socket.on('click', function(data) {
        console.log('client click');
        socket.emit('clickResponse' , 'success'); //소켓을 보내면 연결된 클라이언트한테만 보내고, 페이지가 두개여도 클릭한 페이지에서만 석세스 메세지가 뜸.
        io.emit('clickResponse' ,'io success');   // io를 보내면 모든 연결된 클라이언트한테 보냄, 페이지가 여러개면 클릭 누른데도 석세스 메세지가 뜨고 클릭 누르지 않은데도 io success가 뜸
    })

});



http.listen(8000,function() {
    console.log('Server port : ' , 8000);
});