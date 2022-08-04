const { resourceLimits } = require("worker_threads");

const fs = require("fs").promises;

// exports.post_user = function(data) {
//     console.log(data);
// }

// //컨트롤러가 전달해주는 정보가 data 변수에 담기게 될 것임.



exports.post_user = function(data) {
    const { id, pw , name , age } = data;
    let content = `${id}//${pw}//${name}//${age}`;
    content += "\n";
    // fs.writeFile("../index.txt",result)
    //     .then(() => {
    //         `${id}//${pw}//${name}//${age}`
    //         console.log("작성 완료");
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });

    // fs.writeFile("./index.txt", `${id}//${pw}//${name}//${age}<br>`);  //이건 쌤이 해주신 부분.
    fs.appendFile("./index.txt", content, function (err) {
        if (err) throw err;
    });
}



exports.get_user = async function(){
    var buffer = await fs.readFile("./index.txt");           //이부분과 controller의 post_login 부분에도 async await를 해줘야함.. 아니면 펜딩상태..?
    return buffer.toString();                  //이 값이 UserController.js post_login의 data값으로 들어감. 
}
// 겟을 통해 파일을 읽고 데이터를 보내줌