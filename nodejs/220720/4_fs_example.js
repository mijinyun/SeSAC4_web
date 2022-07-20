const fs = require("fs").promises;

async function example() {
    await fs.mkdir('./sesac');
    console.log("폴더 생성 완료");
    await fs.writeFile("./sesac/sesac.txt","반갑습니다");
    console.log("파일 생성 완료");
    await fs.copyFile("./sesac/sesac.txt","./sesac/sesac2.txt");
    console.log("복사 완료")
    await fs.rename("./sesac/sesac2.txt","./sesac/new.txt", (err) => {
        if (err) throw err;
        console.log('error!');
    });
    
}

example();