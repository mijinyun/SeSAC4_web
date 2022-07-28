const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


const MongoClient = require('mongodb').MongoClient;

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

    db.collection('counter').findOne({name : '게시물갯수'},function(err,결과) {
        console.log(결과.totalPost); 
        var 총게시물갯수 = 결과.totalPost;

        db.collection('post').insertOne({ _id : 총게시물갯수 + 1, 제목 : req.body.title , 날짜 : req.body.date},function(err,result) {
            console.log('저장완료');

            //counter라는 콜렉션에 있는 totalPost 라는 항목도 1 증가시켜야함;
            db.collection('counter').updateOne({name : '게시물갯수'},{ $inc: {totalPost:1}},function(err,res){
                if (err) {return console.log(err)}
            })
            //updateOne : DB데이터를 수정해주는 것 , 한번에 많이 하고 싶으면 updateMany()

        }); //counter라는 이름을 가진 collection에서 name:'게시물갯수'인 데이터를 찾아주세요.


    });    
});

app.get('/list',function(req,res) {
    

    db.collection('post').find().toArray(function(err,결과) {
        console.log(결과);
        res.render('list.ejs',{ posts : 결과 }); 
    });     
    
})