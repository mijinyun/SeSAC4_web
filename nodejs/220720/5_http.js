const http = require("http");

const server = http.createServer(function(req,res){                   //여기서 요청 및 응답을 해내려면 if문을 써야하는데 그럼 너무 복잡해져서 안씀. 그래서 express씀
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});           //respond할때 header를 200으로 보냄. 일반적인 성공상태 코드가 200임.
    res.write("<h1>hi</hi>");     //write로 적으면 응답에 대해 적는거고 보내는 것은 아님.
    res.end("<p>안녕</p>");       //응답할때 어떤내용이 보여질지 적고 리스펀스를 보내는것.(응답을 종료함)
});

server.listen(8000, function() {
    console.log ("8000번 포트");
})                                        //server.listne : 어떤 포트로 연결될지 허락하는것

server.on("request", function() {
    console.log("Client Request");
})

server.on("connection", function() {
    console.log("Client Connection");
})

server.on("checkContinue", function() {
    console.log("Client checkContinue");
})