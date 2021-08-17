const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const app = express();
app.use(bodyParser.json())

app.post('/events', async(req, res) => {
    console.log('Received', req.body);
    const {type, data} = req.body;
    if (type === 'CommentCreated'){
        const status = data.content.includes("orange") ? "rejected" : "approved";
        await axios.post("http://localhost:4005/events", {
            type: 'CommentModerated',
            data: Object.assign(data, {status})
        })
    }

    res.send({});
})

app.listen(4003, ()=>{
    console.log('listening on 4003')
})