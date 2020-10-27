const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

fs.readFile('./Lab3-timetable-data.json', 'utf-8', (err, jsonString) => {
    try{
        data = JSON.parse(jsonString);
    }
    catch (err) {
        console.log("Error Parsing JSON ", err)
    }  
});

app.use('/', express.static('static'));


app.get('/api/courses', (req,res)=>{
    console.log(`GET request for ${req.url}`);
    res.send(data);
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});