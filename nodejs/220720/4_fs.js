const fs = require("fs");

// console.log(fs);   //fs모듈에 뭐가 있는지 확인할 수 있는 방법

// fs.readFile("./test.txt", function(err,data) {
//     if (err) {console.log(err);}
//     else {
//         console.log(data);
//     }
// });          //파일을 읽어오는 것이기 때문에 비동기처리임.그래서 콜백이나 프로미스를 이용


fs.readFile("./test.txt", function(err,data) {
    if (err) throw err;

    console.log(data);

    console.log( data.toString());
    }); 

    //throw 를 쓴거는 return 하면 멈추는 것처럼 throw err 하면 밑에 콘솔로그를 실행하지 않음...?
    
