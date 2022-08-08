const mysql = require("mysql");
const cnn = mysql.createConnection({
    host : 'localhost', 
    user: 'user',
    password: '1234',
    database: 'sesac'
    
});

exports.post_user_sign = (id,name,password,cb) => {
    var sql = "INSERT INTO loginuser (userid,name,password) VALUES('" + id + "','" + name + "','" + password + "') ";
    cnn.query(sql,(err,rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows);
    })
}


exports.post_user_login = (id,password,cb) => {
    
    cnn.query(`SELECT * FROM loginuser WHERE id = '${id}'`,(err,rows) => {  //따옴표하는거 자꾸 헷갈려하지말기!!!!!!!
        if (err) throw err;

        cb(rows[0]);
    })
}