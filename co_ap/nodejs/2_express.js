const express = require("express");
const app = express();
const port = 8000;


app.listen(port,function() {
    console.log('listening on 8000');
})
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/test.html');
})