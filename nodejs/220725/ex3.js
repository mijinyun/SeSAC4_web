const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true})); 
app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.render('ex3_index');
});

app.post('/login',function(req,res) {
    console.log(req.body);

    var user = req.body.user;
    var userpassword = req.body.userpassword;

    

    fs.readFile('./info.txt')
        .then((data) => {

            var user1 = data.toString().split('//')[0];
            var userpassword1 = data.toString().split('//')[2];
            
            if ((user === user1) && (userpassword === userpassword1)) {
                // console.log("로그인 성공!");
                res.send("<script>alert('오예! 로그인성공!');</script>");
            }
            else {
                // console.log("아이디와 비밀번호를 다시 확인해주세요.");
                res.send("<script>alert('아이디 또는 비밀번호를 다시 확인해주세요.');</script>");
            }

        });
        // .catch(() => {
        //     console.log("error!");
        // });
    });


app.listen(port,() => {
    console.log('8080번 포트 연결!');
});