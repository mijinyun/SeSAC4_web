const fs = require("fs").promises;

// fs.writeFile('./write.txt','안녕')           //파일을 쓰는 것, 생성
//     .then(() => {
//         console.log("작성 완료");            //파일이 생성되면 터미널에 작성완료라고 나타남.
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// fs.appendFile : 이어서 적는 것 



// fs.copyFile("./write.txt","./new.txt")         //파일을 복사 ("내가 복사할 파일","복사해서 만들 파일")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


    //만약에 writeFile을 주석처리 안하면 비동기이기때문에 끝나지 않았을 경우 카피가 처리가 안됨.


async function exec() {                //주석처리 없이 동기적으로 파일을 생성하고 카피하는 방법
    await fs.writeFile('./write.txt','안녕');
    console.log("완료1");
    await fs.copyFile('./write.txt','./new2.txt');
    console.log("완료2");

}

exec();
