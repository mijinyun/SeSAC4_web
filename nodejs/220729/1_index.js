const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require("path"); //내장모듈을 사용하기 때문에 path 불러봐야함!
const multer = require("multer"); 
// const upload = multer({dest: "uploads/"}); //dest: destnation
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done) {
            console.log( "multer filename" );
            const ext = path.extname(file.originalname);
            done(null,path.basename(file.originalname,ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize : 5*1024*1024}, //5mb 라는 뜻!
});


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",test,test2,function(req,res) {
    res.render("1_index");
});
// function을 바로 들어가는 것이 아닌 미들웨어인 test, test2를 거치고 function으로!

app.post("/upload", upload.single('userfile'),function(req,res) {
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});

app.post("/upload/array",upload.array('userfile'),function(req,res){
    console.log(req.body);
    console.log(req.files);     //array를 이용하면 files 라고 해야함.
    res.send("Upload Array");

});

app.post("/upload/fields",upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'}]),function(req,res){
    console.log(req.body);
    console.log(req.files);     
    res.send("Upload fields");

});  //fields는 파일마다 각각 네임을 명시를 해줘야함(번거로워서 잘 쓰진 않음)

//upload.single('userfile') : uesrfile이라는 네임을 가진 것 하나의 파일만 받겠다는 것
//이 정보를 req.body에 담아서 다음 미들웨어에 넘김


function test(req,res,next) {
    console.log("test함수");
    console.log(req.path);      // "/"이 찍힘.
    req.aaa="....";
    next();
}

function test2(req,res,next) {
    console.log("test2함수");
    console.log(req.aaa);
    next();
}

app.listen(port,() => {
    console.log("Server Port : ", port);
})