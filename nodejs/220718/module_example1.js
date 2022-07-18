const os = require("os");
const path = require("path");

console.log('사용가능한 메모리(RAM):',os.freemem());
console.log('전체 메모리 용량:',os.totalmem());
console.log('홈 디렉토리 경로:',os.homedir());

console.log('경로 구분자:',path.sep);
console.log('현재 파일의확장자:',path.extname(__filename));
console.log(path.parse(__filename));
