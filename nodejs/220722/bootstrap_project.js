const express =require ("express");
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.use('/',express.static('public'));

app.get('/', (req,res) => {
    
    res.render("project");

});

app.listen(port,() => {
    console.log('Server port : ', port);
});