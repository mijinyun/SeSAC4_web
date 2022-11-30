const express = require('express');
const app = express();
const port = 8000;

// var client_id = 'EqQjdxZAA3_CVXsoDeVg';
// var client_secret = 'hTMy6gJOY9';


app.set("view engine", "ejs");

app.get("/",(req,res) => {
  res.render('search');
});

app.get('/search/news', function (req, res) {

    console.log(req.query.query);
   var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(req.query.query); // JSON 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      //  console.log('여기:',body);
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(port, function () {
   console.log('listening on port 8000!');
 });