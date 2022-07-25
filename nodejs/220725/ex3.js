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


fs.readFile('./info.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})




app.listen(port,() => {
    console.log('8080번 포트 연결!');
});