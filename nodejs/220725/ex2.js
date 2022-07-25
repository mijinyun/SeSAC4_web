const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true})); 
app.use(bodyParser.json());


app.get('/' ,function(req,res) {
    res.render('ex2_index');
});

app.post('/info',function(req,res) {
    console.log("receive-post");
    console.log(req.body);
    var user;
    var username;
    var userpassword;
    var result = req.body.user + "//" + req.body.username + "//" + req.body.userpassword ;

    fs.writeFile('./info.txt', result)           
    .then(() => {
        console.log("작성 완료");            
    })
    .catch((err) => {
        console.error(err);
    });

});




app.listen(port, () => {
    console.log('listening on 8080');
});