const express = require('express')
const Event = require('../models/event')

evento = express()

evento.post('/event',async (req,res)=>{
    const {ownerName,ownerMail,name,description,maxPeople,minimumAge,beginDay,endDay,beginTime,endTime,place,targetAudience} = req.body

    const req_data={
        ownerName,
        ownerMail,
        name,
        description,
        maxPeople,
        minimumAge,
        beginDay,
        endDay,
        beginTime,
        endTime,
        place,
        targetAudience
    }

    const event = new Event(req_data)

    console.log(event)
})

evento.post("/editEvent", function(req, res){
    console.log("oieeeee");
    res.send("Formulário recebido my friend!");
})

module.exports = evento