const express = require('express');
const app = express();
const port = 8000;
 // view engine이라고 적는것은 정해진 것인지????? ok 맞음 (views는 디폴트값임. 우리가 따로 지정해주지 않았기때문에 디폴트값을 쓰는것이다!)
app.set('view engine','ejs');    //확장자가 ejs인것을 사용할 것이고 view 파일들을 views폴더에 모아둔다는것을 의미...?
app.use('/', express.static('public'));  //public 은 정적파일들을 관리하는 곳이라고 정의해놓은 것! , abc는 가상 경로를 만들어줌
// '/abc'를 붙여주지않으면 그냥 퍼블릭이라는 곳에서 가져오는 거지만 /abc를 붙여주면 어떤 경로를 통해서 가져오는지를 정의해주는 것.
// 퍼블릭이라는 접근 경로를 이용할 건데 abc라는 가상경로를 이용하겠다는 것. abc가 퍼블릭을 대체하도록 설정한 것.


app.get('/', (req,res) => {
    // res.render("test");                //render: 파일을 불러와서 파일을 보여주는 것.확장자를 적지 않아도됨.왜냐면 위에 ejs 엔진을 사용한다고 해주었기때문에
    // res.render("larva");
    // res.render("test", {a: "aaa", b: "bbb"});    //값을 보낼때는 딕셔너리 형태로 보낼수가 있음. 백에서 보내는 값을 프론트에 값을 받을 수 있음. 이대 딕셔너리 키가 프론트에서 변수로 쓰임.
    var list = ['apple','banana'];
    res.render("test", {list : list});
    
    
    // res.send('Hello Express!');

});

app.listen(port,() => {
    console.log('Server port : ', port);
});