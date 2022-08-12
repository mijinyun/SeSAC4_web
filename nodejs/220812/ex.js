const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(cookieParser('1234')); 


app.get("/",(req,res) => {
    res.render("index2");
})

app.get("/popup",(req,res) => {
    res.render("popup");
})
app.listen(port, () => {
    console.log("Server : " , port );
})