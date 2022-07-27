const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/frontend/src/createEvent.tsx");
});


app.post("/editEvent", function(req, res){
    console.log("oieeeee");
    res.send("Formulário recebido my friend!");
})


app.listen(3000, function(){
console.log("The server is running bro!");
});