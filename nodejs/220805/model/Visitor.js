const { application } = require("express");
const mysql = require("mysql");
const cnn = mysql.createConnection({
    host : 'localhost', //만약 서버에 접속하는 거면 서버주소를 써주면됨.
    user: 'user',
    password: '1234',
    database: 'sesac'    //하나의 db만 연결이 가능.
    
}); //db 연결해주는 함수.딕셔너리형태로 값을 보내줌.  //연결된 객체를 cnn에 담아주는 것. 

//cnn객체에 쿼리라는 함수가 있음. 작성한 sql을 실행하는 함수 = 쿼리
 
exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor',(err,rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);         //여기서 rows값은 mysql에 저장되어있는 db-튜플을 나타냄.
    }); 
    //query는 콜백함수. ' ' 쿼리문이 정상적으로 실행되면 rows로 실행됨.
}

exports.insert = (name,comment,cb) => {
    var sql = "INSERT INTO visitor(name,comment) VALUES('" + name + "','" + comment + "') " //id를 안쓰면 어떤 컬럼에 넣을지 ()에 명시를 해줘야함.
    // INSERT INTO visitor(name, comment) VALUES('홍길동', '내가 왔다');
    // console.log( name + " 반가워요")
                                                            //여기서 따옴표 주의해서 써야함. 플러스는 왜한거지?(사실 이해안감).
    cnn.query(sql,(err,rows) => {
        if (err) throw err;

        console.log(rows);  //여기서 rows는 insert를 통해서 넘어온 값 // 사용자이름,방명록 입력해서 등록하고 들어온 데이터를 말함.
        cb(rows.insertId);  // console.log(rows) 했을 때, OkPacket{ }이 출력이 되는데 여기에서 insertId라는 키?를 가져오는 거임.
    });


}                                                          

//모델은 request객체를 확인할수없다.그래서 컨트롤러가 모델에게 값을 보내줘야함. 


exports.get_visitor = (id, cb) => { 
    //id 컬럼의 값이 id인 데이터를 1개만 검색한다.('SELECT * FROM visitor WHERE id = ${id} limit 1')
    cnn.query(`SELECT * FROM visitor WHERE id = ${id} limit 1`,(err,rows) => {
        if (err) throw err;

        cb(rows); //mysql에서 넘어온 그대로 컨트롤러에 보낸 것.
    });
}


exports.update = (data,cb) => {
    let sql  = `UPDATE visitor SET name='${data.name}',comment='${data.comment}' WHERE id=${data.id}`;
    cnn.query(sql,(err,rows) => {
        if (err) throw err;

        cb(rows);
    });
}

exports.delete = (id,cb) => {
    cnn.query(`DELETE FROM visitor WHERE id=${id}`,(err,rows) => {
        if (err) throw err;

        cb(rows);
    });
}