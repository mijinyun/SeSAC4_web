const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

app.listen(port,function() {
    console.log('listening on 8000')
});


app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/write',function(req,res) {
    res.sendFile(__dirname + '/write.html')
});

//어떤 사람이 /add 경로로 post 요청을 하면... ??를 해주세요~
app.post('/add', function(req,res) {
    res.send('전송완료')
    console.log(req.body.title);
    console.log(req.body.date);
    // DB에 저장해주세요
    
});