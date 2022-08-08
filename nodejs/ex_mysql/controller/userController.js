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
        console.log(result);
    })
}
