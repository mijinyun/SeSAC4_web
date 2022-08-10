const models = require("../model");

exports.sign = (req,res) => {
    res.render("sign");
}

exports.post_sign = (req,res) => {
    // console.log(req.body);
    // User.post_user_sign(req.body.userid,req.body.username,req.body.userpassword,function(result) {
    
    //     res.send(true);
    // });

    let object = {id: req.body.userid, name:req.body.username, password: req.body.userpassword}
    models.User.create(object)
    .then((result) => {
        console.log(result);
        res.send(true);
    })
    
} 

exports.login = (req,res) => {
    res.render("login");
}

exports.post_login = (req,res) => {
    // User.post_user_login(req.body.userid,req.body.userpassword,function(result) {


    //     console.log(result.length);
    //     if (result.length > 0 ) { res.send(true) }
    //     else { res.send(false)};

    // })


    models.User.findOne({
        where: {id: req.body.userid, password:req.body.userpassword}
    })
    .then((result) => {
        console.log(result);
        if ((result.id == req.body.userid ) && (result.password == req.body.userpassword)) { res.send(true)}
        // else { res.send(false)};
    })
    .catch((err) => {
        res.send(false);
    })
}


exports.post_edit = (req,res) => {
    // User.update(req.body.userid,req.body.userpassword,function(result) {
    //     console.log(result);
    //     res.send("수정 성공");
    // })

    let newObj = {
        id : req.body.userid,
        password: req.body.userpassword
    };

    models.User.update(newObj,{where:{id:req.body.userid}})
    .then((result) => {
        console.log(result);
        res.send("수정 성공!");
    })

}


exports.delete_user = (req,res) => {
    // User.delete(req.body.userid,function(result) {
    //     res.redirect("/user/login");

    // })

    models.User.destroy({
        where: {id:req.body.userid}
    })
    .then((result) => {
        console.log(result);
        res.send("삭제 성공!")
    })

}