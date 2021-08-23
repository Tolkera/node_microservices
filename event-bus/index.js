const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express();
app.use(bodyParser.json())

const events = [];

app.post('/events', async(req, res) => {
    const event = req.body;
    events.push(event);
    console.log(event);
    let ports = [
        "http://posts-clusterip-srv:4000/events",
        "http://query-srv:4002/events",
        "http://comments-srv:4001/events",
        "http://moderation-srv:4003/events"

    ];
    ports.forEach((port) => {
        console.log('sending to', port)
        axios.post(port, event);
    })
    res.send({status: 'OK'})
})

app.get('/events', (req, res) => {
    console.log('getting events', events);
    res.send(events);
})

app.listen(4005, ()=>{
    console.log('listening on 4005')
})