var express = require('express');
const { send } = require('process');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

    app.get('/',function(req,res) {
    console.log('client');    
    res.sendFile(__dirname + '/socket_ex2.html'); 

    });

    //io -> 클라이언트와의 모든 연결을 갖고 있는 친구
    // socket -> 클라이언트 한명. socket.id 클라이언트를 구분하는 식별자

    var list = {};
    io.on('connection', function(socket) {
        console.log('Connected',socket.id);
        // socket.emit('info',socket.id);
        // 서버가 클라이언트에게 식별자를 보내주는것 
        socket.on('info2',function(data){
            list[socket.id] = data.nickname; //고유값이기때문에 키에 들어가는 값이 id여야한다. 이부분 이해가 안감..list[] 이렇게 쓰는거?
            io.emit('notice',data.nickname + "님이 입장하셨습니다.");
            io.emit('list',list);
        });

        // io.emit('notice',socket.id + "님이 입장하셨습니다.");
        socket.on('send',function(data) {
            //data = {id: ~~, msg:~~~} 로 넘어옴.
            //data = {msg: "", to : ""}로 넘어옴.
            console.log('client message : ', data.msg);
            //모두에게 보내는 메세지니까 io.emit!
            data['is_dm'] = false; //전체인지 디엠이 온건지 구분하기 위해서 만든 것
            data['nickname'] = list[socket.id]; //서버에서도 찾을수 있는것을 굳이 클라이언트가 주는 것은 좋지가 않은 방식. 위에 list[socket.id] = data.nickname;에서 닉네임값을 가져오겠다는 것.

            if (data.to == "전체") {
                io.emit('newMessage',data);
            } else {
                data['is_dm'] = true;
                // { a : '1', b : '2' }; 이럴경우 k에는 a,b가 순서대로 들어올 거임. 
                // list[a] === 1 이 data.to와 같으면 키값을 return 해줌...후 어려웡 -ㅅ-
                let socketID = Object.keys(list).find(key =>  list[key] === data.to );
                io.to(socketID).emit('newMessage',data);
                socket.emit('newMessage',data);
            }

        });

        // 연결이 끊겼을때,
        socket.on('disconnect',function(){
            io.emit('notice', list[socket.id] + "님이 퇴장하셨습니다.");
            delete list[socket.id];
        })




    });


    http.listen(8000,function() {
        console.log('Listening on : ' , 8000);
    });