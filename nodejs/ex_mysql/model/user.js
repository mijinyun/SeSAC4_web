const mysql = require("mysql");
const cnn = mysql.createConnection({
    host : 'localhost', 
    user: 'user',
    password: '1234',
    database: 'sesac'
    
});

exports.post_user_sign = (id,name,password,cb) => {
    var sql = "INSERT INTO loginuser (id,name,password) VALUES('" + id + "','" + name + "','" + password + "') ";
    
    cnn.query(sql,(err,rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows);
    })
}


exports.post_user_login = (id,password,cb) => {
    
    cnn.query(`SELECT * FROM loginuser WHERE id = '${id}' and password = '${password}' limit 1`,(err,rows) => {  //따옴표하는거 자꾸 헷갈려하지말기!!!!!!!
        if (err) throw err;
        console.log(rows);

        cb(rows);
    });
}

exports.update = (id,password,cb) => {
    let sql = `UPDATE loginuser SET password='${password}' WHERE id='${id}'`;
    cnn.query(sql,(err,rows) => {
        if (err) throw err;

        cb(rows);
    });
}

exports.delete = (id,cb) => {
    cnn.query(`DELETE FROM loginuser WHERE id='${id}'`,(err,rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);
    });

}