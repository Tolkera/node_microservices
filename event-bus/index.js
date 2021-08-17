const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express();
app.use(bodyParser.json())

const events = [];

app.post('/events', async(req, res) => {
    const event = req.body;
    events.push(event);
    let ports = ["4000", "4001", "4002", "4003"];
    ports.forEach((port) => {
        axios.post(`http://localhost:${port}/events`, event);
    })
    res.send({status: 'OK'})
})

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, ()=>{
    console.log('listening on 4005')
})