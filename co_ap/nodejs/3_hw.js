const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


const MongoClient = require('mongodb').MongoClient;

// 숙제
// 어떤 사람이 /add라는 경로로 post요청을 하면, 
// 데이터 2개 (날짜, 제목)을 보내주는데
// 이때, 'post'라는 이름을 가진 collection에 데이터 두개를 저장하기
// {제목: 어쩌구 , 날짜 : 어쩌구}


var db;

MongoClient.connect('mongodb+srv://admin:1234zxc@cluster0.7zyiznt.mongodb.net/?retryWrites=true&w=majority',function(err,client) {
    if (err) return console.log(err)
    
    db = client.db('todoapp'); 
    app.listen(8080,function() {
        console.log('listening on 8080')   
    });
})


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/1_index.html')
});

app.get('/write',function(req,res) {
    res.sendFile(__dirname + '/1_write.html')
});

app.post('/add', function(req,res) {
    res.send('전송완료')
    console.log(req.body.title); //input값
    console.log(req.body.date);
    db.collection('post').insertOne({ 제목 : req.body.title , 날짜 : req.body.date},function(err,result) {
        console.log('저장완료');
    });    
});

//input값 받은거를 db에 저장하는 것!




// /list로 get요청으로 접속하면 실제 DB에 저장된 데이터들로 예쁘게 꾸며진 HTML을 보여줌 
app.get('/list',function(req,res) {
    

    // 데이터를 먼저 꺼내야하므로 먼저쓰기 // .find() : 모든 데이터
    db.collection('post').find().toArray(function(err,결과) {
        console.log(결과);

        res.render('list.ejs',{ posts : 결과 }); //posts는 작명한거
        //결과라는 데이터를 posts라는 이름으로 ejs파일에 보내주세요.
        //db에서 자료 찾은것을 ejs파일에 넣어주세요! //코드 위치 잘봐야함!
        //db에 저장된 post라는 collection안의 모든 or id가 뭐인 or 제목이 뭐인 데이터를 꺼내주세요

    });     

    
})