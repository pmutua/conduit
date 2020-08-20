const express = require("express");
const app = express();




//routes 
app.get('/', (re,res) =>{
    res.send("Test")
})








//listen 
app.listen(3000);
