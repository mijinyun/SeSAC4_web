//세션설명하려고 만든 로그인 관련 코드
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(cookieParser('1234')); 

app.use(session({
    secret: 'secret key',        
    // resave: false,             
    // saveUninitialized: true
}))

app.get("/login",(req,res) => {
    res.render("login");
})

app.post("/login",(req,res) => {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id;        //세션에 아이디입력한다는 뜻.
        res.redirect("/profile");
    }
    else res.redirect("/login");
});

app.get("/profile",(req,res) => {
    if ( req.session.id == undefined || req.session.id == "") {
        res.redirect("/login");   //profile이 get이기때문에 그냥 url쳐서 입장할수 있음 그래서 if문을 통해서 id를 탐색해보는것. if조건이면 다시 로그인창으로 보내버리는 것. 
        return false;
    }

    // req.session.id 로 작업        //db에서 검색해서
    res.render("profile");
})

app.get("/main", (req,res) => {

})