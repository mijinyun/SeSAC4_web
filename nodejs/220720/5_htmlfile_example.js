const http = require ('http');
const fs = require ('fs').promises;

// 27.96.135.21
const port = 8080;
// const hostname = '27.96.135.21';
const server = http.createServer(async function (req, res) {


    // C:\Users\yunmj\github\week1\larvar2_mod.html'
    try {
        console.log(req.url);
        const data = await fs.readFile('./larva2_mod.html');
        res.writeHead(200);
        res.end(data);
    }
    catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(port,function() {
    console.log ("8080번 포트");
})



///내가 안되었던 이유는 컴퓨터는 노드가 16버전인데 푸티에서는 8버전이여서
