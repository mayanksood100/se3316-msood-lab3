const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
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

app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url}`);
    next();
})

router.get('/', (req,res)=>{
    res.send(data);
});

router.get('/:subject', (req,res)=>{
    let subject = data.filter(c => c.subject==(req.params.subject))
    for(let i=0; i<subject.length; i++){
    if(subject){
         res.send(subject)
    }
    else {
       res.status(404).send(`Subject ${subject} was not found`);
    };
}
});


app.use('/api/courses', router)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});