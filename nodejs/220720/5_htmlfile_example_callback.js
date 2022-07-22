//callback방식으로

const http = require ('http');
const fs = require ('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./larva2_mod.html', function(err,data) {
        if (err) {
            //promise 에서의 catch

            console.error(err);
            res.writeHead(404);
            res.end(err.message);

        }
        else {
            // promise 에서의 try

            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(8000,function() {
    console.log("8000포트로 연결");
});