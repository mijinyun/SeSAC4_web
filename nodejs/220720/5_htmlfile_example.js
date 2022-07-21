const http = require ('http');
const fs = require ('fs').promises;

// 27.96.135.21
const port = 8080;
const hostname = '27.96.135.21';
const server = http.createServer(async function (req, res) {


    // C:\Users\yunmj\github\week1\larvar2_mod.html'
    try {
        const data = await fs.readFile('./test.txt');
        res.writeHead(200);
        res.end(data);
    }
    catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(port,hostname,'50000',function() {
    console.log ("8080번 포트");
})

