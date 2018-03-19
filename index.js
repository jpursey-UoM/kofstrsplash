const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello');
})

app.listen(3000, function(){
    console.log("Server started");
})