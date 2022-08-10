// const Visitor = require("../model/Visitor");
const express = require('express');
const models = require("../model");
//models => model/index.js에서의 db //sequelize문법

 

exports.get_visitors = (req,res) => {
    models.Visitor.findAll()
    //db.Visitor(model에서)= return된 model 자체가 선택이 된 것. //model/Visitor.js에서 함수가 실행되고 return 된 model
    //findAll() : sequelize문법. select * from visitor; 이런함수! 조건없이 모든걸 찾는 것. //sequelize 장점 : 프로미스
    .then((result) => {
        console.log("result : ",result);
        console.log("index");
        res.render("index", {data: result});
    });

//     //여기는 mysql
//     Visitor.get_visitors(function( result ){
//         console.log( "result : ", result );
//         console.log( "index" );
//         res.render("index", { data: result });
//     });
}

exports.post_comment = (req,res) => {
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );

    //create() -> insert into visitor
    // create( { name:'홍',comment: '길동'}) -> insert into visitor(name, comment) values('홍','길동');
    let object = {name: req.body.name , comment: req.body.comment}
    models.Visitor.create(object)  // 어떤 객체를 만들지에 대한 정보가있어야하므로 객체를 담아주는 것. 어떤 컬럼에 어떤값을 넣어줘라! 라고 정의해주는것. 
    .then((result) => {
        // res.send({id:result}); //이건 mysql때랑 동일하게 못씀. 왜냐? insert는 rows.insertId로 가공해서 넘긴것이기 떄문에.
        console.log(result);
        res.send({id :result.id}); //배열에 담긴게 아니고 객체로 리턴되었기 때문에 모델 하나만 검색된 것임! 앞에서 findeAll했을때는 배열로 담겨서 result[0]으로 했던 것.
    })
}

exports.get_visitor = (req,res) => {
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })

    //select * from visitor where id = req.query.id limit 1
    models.Visitor.findOne({
        //조건
        where: {id: req.query.id, name:"윤미진"} //get요청이기때문에 query~
    })
    .then((result) => {
        console.log(result);
        res.send({result:result});
    })
}

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
    let newObj = {
        name:req.body.name,
        comment: req.body.comment
    };
    //update visitor set name=req.body.name, comment=req.body.comment where id = req.body.id
    models.Visitor.update(newObj,{where:{id:req.body.id}})
    .then((result) => {
        console.log(result);  //수정성공 후 [1]이 찍히면 몇개가 업데이트 되었는지 알려주는것. 만약 아무것도 수정안하고 수정성공하면 [0]이라고 뜸.
        res.send("수정 성공");
    })
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });

    models.Visitor.destroy({
        where: {name:'1'}                       //이부분에서 만약에 조건에 name='1'이면 테이블에 name이 1인것의 갯수만큼 콘솔로그가 찍히게된다~
        // where: {id:req.body.id}       
    })
    .then((result) => {
        console.log(result);
        res.send("삭제 성공");
    })

}