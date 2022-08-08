const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser"); 

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


const router = require("./routes");
app.use("/user",router);




app.listen(port,() => {
    console.log("Server port: ",port);
}); 