const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));    //바디파서를 익스프레스에서 사용한다는 뜻임
app.use(bodyParser.json());  //data를 받을때, json형태로 받겠다는 뜻!


app.get("/",function(req,res) {
    res.render("index");

});

app.get("/receive",function(req,res) {
    console.log("receive-get");
    // res.render("index");
    console.log(req.body); 
    console.log(req.query);     //get으로 보내면 url물음표 뒤에 데이터가 찍히기 때문에 쿼리로 받는것.
    res.render("receive",req.query);


    console.log(req);
});
//url에서 바로 /receive를 작성해서 들어가면 receive-get이 콘솔로그 찍힘
//만약 전송버튼 누르면 아래꺼가 실행되서 receive-post가 찍힘


app.post("/receive",function(req,res) {
    console.log("receive-post");
    // console.log(req.body);
    // res.render("index");

    console.log(req.body);
    res.render("receive" ,req.body);

    //클라이언트에게 받은 데이터를 다른 클라이언트에게 보낼때!
    // receive라는 파일에 req.body를 보내겠다. (req.body는 폼에서 작성해서 받은 데이터들(리스트))

});  //form에서 action을 했을 때 여기 줄로 와서 실행된다는 것. 같은 경로여도 메소드에 따라 달라짐. ejs파일에서 메소드를 포스트로 해줬기 때문에 app.post로 들어온것.


app.listen(port, () => {
    console.log("Server Port : ", port);
})