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



exports.get_visitor = (req,res) => {
    Visitor.get_visitor(req.query.id, function(result) {        //req.query.id 를 보내줘야 모델에서 받아서 함수처리를 해줄수가있음.
        console.log("result: ", result);
        // req.send({data:result}); //이중배열형태 [{}] 이런형태인데 아래는 {} 이형태로 보내겠다는 것 
        res.send({result : result[0]});  //일차원배열로 보내겠다는것!검색된 한개의 데이터만 클라이언트에게 보내겠다는 것.
        //여기서 result : ~로 보냈으면 ejs파일에서 데이터를 받을때 result로 해줘야함! 아니면 에러가 발생!!
        
    })
}

//이함수는 모델을 실행시켜서 한개를 가져오는 거임.


exports.patch_comment = (req,res) => {
    //patch도 post로 동일하게 axios로 값을 받기?때문에 동일하게 body로 받음.
    Visitor.update(req.body, function(result) {
        console.log(result);
        res.send("수정 성공");
    });
}

exports.delete_comment = (req,res) => {
    Visitor.delete(req.body.id , function(result) {
        console.log(result);
        res.send("삭제 성공");
    });
}