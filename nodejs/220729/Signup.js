const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");
const multer = require("multer"); 
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done) {
            console.log( "multer filename" );
            const ext = path.extname(file.originalname);   //확장자
            done(null, req.body.username + ext); //내가 보낸 id로 이름 정하는 것 //이러한 셋팅을 해놓은거다! req값이 들어오면 넣는다는 셋팅을 해놓은것!
        },
    }),
    limits: {fileSize : 5*1024*1024}, 
});


app.set("view engine","ejs");
app.use(express.static("uploads"));       //이부분을 해줘야 이미지가 나타날 수 있음. 
app.use(express.urlencoded({extended:true})); 
app.use(bodyParser.json());


app.get('/' ,function(req,res) {
    res.render('Signup');
});


app.post('/info',upload.single('userfile'),function(req,res) {
    console.log("receive-post");
    console.log(req.body);
    console.log(req.file); // 이부분!!! 폼에서 작성한 request들이 들어오는데 req.file을 하게 되면 name=file로 지정했던 것이 들어오는것!

    res.render("image",{filename: req.file.filename});
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