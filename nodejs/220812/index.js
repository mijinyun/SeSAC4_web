const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(cookieParser('1234')); 
// 1234는 키 설정을 해준것. 쿠키파서를 이용할때마다 1234 키를 이용하는 것. 
app.use(session({
    secret: 'secret key',           //암호화할때 (필수값)
    // resave: false,              //세션을 덮어쓰기할지 //만료기간이 따로 없기때문에 false(변경되지않았을 때) 다시쓰지않게 하는것
    // saveUninitialized: true     //세션이 초기값이 지정되지 않은 상태에서도 그 미리 칸을 만들어놓는 것.
}))

const cookieConfig = {
    maxAge: 30000,     //만료기간 설정. 30000 = 30초
    path: '/',           //쿠키에 접근할 수 있는 경로. 만약 /get로 적으면 /get경로로 시작할때만 쿠키를 볼 수 있음. 보통 '/'는 모든 경로에서 쿠키를 볼 수 있는 것.
    httpOnly: true,      //기본값은 false, true이면 통신할때만 접근이 가능. 이해가 안감. 클라이언트는 쿠키를 보지못함. 코드내에서 가져와서 작업을 할 수 없음. 웹서버를 통해서만 쿠키에 접근이 가능.
    signed: true,        //쿠키를 암호화시키는 것. 
};


app.get("/",(req,res) => {
    req.session.name = '홍길동'; //여기서 홍길동은 key   //req.session.key='value'랑 같음.
    res.cookie('key','value',cookieConfig);  //cookieConfig: 옵션(딕셔너리 형태로 보냄)
    res.cookie('key2','value2',cookieConfig);
    res.render("index");
});


app.get("/get",(req,res) => {
    console.log(req.session.name);
    console.log(req.cookies);          //클라이언트가 갖고있는 것을 가져오는 것이기 때문에 res가 아니라 req.
    res.send(req.cookies);           //어떤 쿠키들이 있는지 서버가 클라이언트에게 받는 것이니까 req.
})

app.get("/cookie",(req,res) => {
    res.render("cookie");
})

app.get("/destroy",(req,res) => {
    req.destroy(function(err) {
        res.send("삭제");        //모든 연결을 한번에 삭제   //쿠키는 만료기간 설정이 있기 때문에 기간에따라 없어지지만 세션은 만료기간 설정이 없기 때문에 삭제를 따로 설정해주는것.

    })
    req.session.name=" ";         //특정 한 세션만 삭제하려면 설정하려는 값이 빈값이 되면 됨.
})


app.listen(port ,() => {
    console.log("Server :", port);
});