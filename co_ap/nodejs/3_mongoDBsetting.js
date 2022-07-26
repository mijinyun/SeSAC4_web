const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


const MongoClient = require('mongodb').MongoClient;
// 위를 쓰기위해서는 mongoDB라는 라이브러리를 설치해줘야함.

var db;
var date = new Date();
MongoClient.connect('mongodb+srv://admin:1234zxc@cluster0.7zyiznt.mongodb.net/?retryWrites=true&w=majority',function(err,client) {
    if (err) return console.log(err)
    
    db = client.db('todoapp'); //todoapp이라는 database(폴더)에 연결

    db.collection('post').insertOne({제목 : '첫번째' , 날짜 : date , _id : 1 }, function(err,result){
        console.log('저장완료');
    }); //내가 원하는 데이터를 저장 (임시코드기때문에 아무데나 쓴거임)
    db.collection('post').insertOne({제목 : '두번째' , 날짜 : date , _id : 2 },function(err,result){
        console.log('저장완료2');
    })

    app.listen(8080,function() {
        console.log('listening on 8080')   //nodejs 서버띄우는 코드임.
    });
})
//database 접속이 완료되면 내부 코드를 실행해주세요. 라는 것! 



app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/write',function(req,res) {
    res.sendFile(__dirname + '/write.html')
});

app.post('/add', function(req,res) {
    res.send('전송완료')
    console.log(req.body.title);
    console.log(req.body.date);    
});