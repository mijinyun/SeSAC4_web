const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");  //이부분이 req.body를 읽어주는 부분임.

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


const router = require("./routes"); //파일이름을 index.js라해서 /routes로만해도 알아서 찾아옴. 왜냐면 기본 js파일이기때문에/ 만약에 다른 파일명이면 파일명을 꼭 적어줘야한다!
app.use("/user",router); //use를 이용해서 미들웨어 이용 //  "/"여기로 들어오면 router로 들어가라는 것!
// app.use("/app",router); //이렇게 되어있으면 /app으로 접속하면 라우터로 연결해주라는 뜻. 그래서 위에는 /만 쳐도 들어가지만 /app일 경우는 localhost:8080/app 이라해야함.
// 이부분은 app.get("/") 이렇게 경로를 지정해준 것이고 이경로를 지정해주면 router로 가면 그안에서 res.send("~")가 실행되는 것.

app.get("/",function(req,res) {
    res.send("Index");
})

app.listen(port,() => {
    console.log("Server port: ",port);
});