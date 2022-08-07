const Visitor = require("../model/Visitor");

exports.get_visitors = (req,res) => {
    Visitor.get_visitors(function(result) {   ///model에서 cb(rows)해주는 것을 이함수가 받는 거임.
        console.log("result : ", result);
        console.log("index");
        res.render("index",{ data: result }) //data라는 키값으로 result를 보내줌. ejs에서 데이터라는 변수명으로 사용할 수 있음. 여기서 result는 모델에서 cb(rows) //ejs엣서 <%=name%>이렇게 된부분에서 name은 키값이다~~이말!
    });//mysql은 프로미스가 안되기때문에 콜백함수를 실행해줘야 렌더가 가능.    
}

exports.post_comment = (req,res) => {
    console.log(req.body);

    Visitor.insert(req.body.name,req.body.comment,function(result) {
        res.send({id : result}); //이거는 모델에서 insert실행이 끝난후에 실행이 되는 것임. 위에 result는 모델에서 받은 cb(rows.insertId)임. //딕셔너리 형태로 클라이언트한테 응답한것.  = rep.data
    });    //클라이언트가 입력한 두값을 넣어주는거임.그럼 모델에서 쓸수있으음.
    // res.send(true); //실행했을때 콘솔확인하면 data:true가 나오는걸 볼수있음.
}


//여기서 궁금한것!!! 위에서 id: result 는 id값만 가져온 것인데. 그이유는 id가 primary key라서 id값만 가져오는 것인가?
//primary key만 가져오면 나머지 값이 입력이 되는건가?




// exports.delete_comment = (req,res) => {

//     Visitor.delete
// }

// exports.update_comment = (req,res) => {
//     console.log(req.body);
     
// }