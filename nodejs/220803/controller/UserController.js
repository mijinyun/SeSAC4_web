const User = require("../model/User");

exports.index = (req,res) => {
    res.send("index");
}

exports.register= (req,res) => {
    res.render("register");
}

// 이렇게 쓰면 module.exports = { register }; 랑 동일한 것임...
// 만약 함수가 여러개면 
// module.exports = { register, a , b ....}; 이렇게 쓰고 
// exports.a = ~
// exports.b = ~ 이렇게만 해주면됨.

// 원래는 
// module.exprots  = { register }; 라고 내보냈으면 indexe.js(routes)부분에서
// const { register } = require("../controller/UserController"); 라고 할텐데 이거는 객체 하나를 내보내는 것이기때문에 안쓴거임
// 여러객체를 내보낼 거니까! 
// 그래서 exports.register ~ 라고 해준겅다~ 그리고 indexe.js(routes)부분에서는 const user= require(~)라고 설정을 해준 거임.


exports.post_register = (req,res) => {
    User.post_user(req.body);
    res.send(req.body);
}
//이 모델한테 불러주는 파일을 써라...라는..것..? 컨트롤러는 직접적으로 디비를 건들면 안되니까?

exports.login = (req,res) => {
    res.render("login");             //login.ejs 가 보이게 해줌

}

exports.post_login = async (req,res) => {
    var data = await User.get_user();
    // User.get_user();              //User라는 모델에서 get_user라는 함수를 통해 데이터를 가져오겟다(왜냐, 컨트롤러는 데이터를 읽을수가 없으니까.)
    
    var info = data.split("//");         //index.txt파일에 있는 문자열을 //로 기준으로 나눠서 배열로 담음.
    
    if (info[0] != req.body.id) {
        res.send("아이디 다름");
    }
    else if (info[1] != req.body.pw) {
        res.send("비밀번호 다름");
    }
    else {
        res.send("로그인 성공!");
    }
    
    console.log(data);
}