const express = require('express');
const path = require('path')
const router = require('./routes')

const app = express();

app.use(express.json())

app.get("/", (req, res) =>{
    res.sendFile(path.resolve('../../frontend/src/pages/createEvent.tsx'));
});

app.use(router)


app.listen(3000, function(){
console.log("The server is running bro!");
});