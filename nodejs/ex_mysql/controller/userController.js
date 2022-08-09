const User = require("../model/user");

exports.sign = (req,res) => {
    res.render("sign");
}

exports.post_sign = (req,res) => {
    // console.log(req.body);
    User.post_user_sign(req.body.userid,req.body.username,req.body.userpassword,function(result) {
    
        res.send(true);
    });

} 

exports.login = (req,res) => {
    res.render("login");
}

exports.post_login = (req,res) => {
    User.post_user_login(req.body.userid,req.body.userpassword,function(result) {


        console.log(result.length);
        if (result.length > 0 ) { res.send(true) }
        else { res.send(false)};

    })
}


exports.post_edit = (req,res) => {
    User.update(req.body.userid,req.body.userpassword,function(result) {
        console.log(result);
        res.send("수정 성공");
    })
}


exports.delete_user = (req,res) => {
    User.delete(req.body.userid,function(result) {
        res.redirect("/user/login");

    })
}