const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
    console.log("회원가입 폼 전송완료");
    res.render('signup');

});

app.get('/receive',function(req,res) {
    console.log("폼 데이터 전송완료");
    console.log(req.body);
    res.render('receive',req.body);
});

app.listen(port,() => {
    console.log("Server Port: ", port)
});


// const express = require("express");
// const app = express();
// const port = 8080;
// const bodyParser = require("body-parser");

// app.set("view engine","ejs");
// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());

// app.get("/",function(req,res) {
//     res.render("signup");
// });


// app.post("/receive",function(req,res) {
//     console.log("receive-post");
//     console.log(req.body);   
//     res.render("receive",req.body);

// });



// app.listen(port, () => {
//     console.log("Server Port : ", port);
// })