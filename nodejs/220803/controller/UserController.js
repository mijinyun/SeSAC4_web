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
    
    const info = data.split("\n");
    var n = info.length;
//     for (var i = 0; i<n; i++) {
//         var eachData = info[i].split("//");
//         console.log(eachData);

//         if (eachData[0] != req.body.id) {
//             res.send("아이디 다름");
//         }
//         else if (eachData[1] != req.body.pw) {
//             res.send("비밀번호 다름");
//         }
//         else {
//             res.send("로그인 성공!");
//         }

    
//     }
// }
    var hashMap = new Map();
        for (var i = 0; i<n; i++) {
            var eachData = info[i].split("//");
            hashMap.set(eachData[0], eachData[1]);
        }
        console.log(hashMap);
        console.log(req.body.index);
        console.log(hashMap.has(req.body.id));
        if (hashMap.has(req.body.id) === false) {
            res.send("아이디 다름");
        }
        else if (hashMap.get(req.body.id) === req.body.pw) {
            res.send("로그인 성공!"); 
        } else {
            res.send("비밀번호 다름");  
        }
    };

//     const info = data.split("\n");
//     var n = info.length;
//     var ids = [];
//     var pws = [];
//     for (var i = 0; i<n; i++) {
//         var eachData = info[i].split("//");
//         ids.push(eachData[0]);
//         pws.push(eachData[1]);
//         console.log(eachData[0]);
//     }
//     console.log(ids);
//     console.log(pws);
//     console.log(req.body.id);
//     console.log(req.body.pw);
    
//     if (req.body.id in ids === false) {
//         res.send("아이디 다름");
//     }
//     else if (req.body.pw in pws === false) {
//         res.send("비밀번호 다름");  
//     } else {
//         res.send("로그인 성공!");
//     }
// };
