console.log("hello!!");
const express = require('express');
const path = require('path');
const app = express();
const port = 6500;
// const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'temp/NFTindex.html'));
})

app.listen(port, ()=>{
    console.log(`This Application Started Succesfully on port ${port}`);
});