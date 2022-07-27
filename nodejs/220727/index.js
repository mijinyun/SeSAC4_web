const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.render("index");
})

app.get('/test',function(req,res) {
    res.send("test");
})
app.get('/test2',function(req,res) {
    res.send({name : "test2" , message: 123});
})


app.get('/receive',function(req,res) {
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + "GET";
    res.send({name : name, message: msg});

})

//get에서는 클라이언트에서는 query로 받는 것! post는 body로!


app.post('/receive',function(req,res) {
    console.log(req.body);

    // var list = [req.body.name, "hello" , req.body.age, "10"];
    // res.send(list); //이렇게하면 index마다 각각 값이 나오지만 list : list 하면 딕셔너리처럼 나옴
    // res.send(req.body.name +  "안녕"); //res.send는 하나의 인자만 보낼수있기 때문에(a면 a, b면 b // 만약 두개 다 보내려면 딕셔너리 형태로 보내야된당) 딕셔너리로 묶어서 보내야 하는것!
    

    let name = req.body.name;
    let msg = req.body.name + " 안녕";
    res.send({ name: name , message: msg});

})




app.listen(port,() => {
    console.log("Server Port : " , port);
})