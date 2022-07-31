const url = require("url");
const { URL } = url;  // const URL = url.URL; 이랑 같음. { URL }은 구조분해해서 가져오는 것


const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=Sesac";
const naver = new URL(string);

console.log(naver.searchParams);
console.log(naver.searchParams.keys());
console.log(naver.searchParams.values());

naver.searchParams.delete('sm');

console.log(naver.searchParams.keys());


// console.log(process.version);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.uptime());
// console.log(process.execPath);
// console.log(process.cpuUsage());
// console.log(process.env);