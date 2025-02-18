const express = require("express");
const app = express();
const fs = require("fs");
app.use("/", express.static("static"));
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();
const port = 3000;
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://mayanksood100:Pioneer108!@cluster0.8pdze.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI || "mongodb://localhost/schedulesdb");
mongoose.Promise = global.Promise;
const Schedule = require("./models/schedules.js");


fs.readFile("./Lab3-timetable-data.json", "utf-8", (err, jsonString) => {
  try {
    data = JSON.parse(jsonString);
  } catch (err) {
    console.log("Error Parsing JSON ", err);
  }
});

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

router.use(express.json());

//Setting up the route for '/api/courses'
router.route("/").get((req, res) => {
  res.send(data);
});

//Setting up the route for '/api/courses/:subject' so user can search for course by just Subject.
router.route("/:subject").get((req, res) => {
  let subject = data.filter((c) => c.subject == req.params.subject);
  
    if (subject.length>0) {
      res.send(subject);
    } 
    else{
      res.status(404).send(`Subject ${req.params.subject} was not found`);
    }
 
});

//Setting up the route for '/api/courses/:subject/:catalog_nbr'  so user can search for course by subject+courseCode.
router.route("/:subject/:catalog_nbr").get((req, res) => {
  let subject = data.filter((c) => c.subject == req.params.subject);
  let catalogNbr = subject.filter(
    (c) => c.catalog_nbr.toString() == req.params.catalog_nbr
  );
 
    if (catalogNbr.length>0) {
      res.send(catalogNbr);
    } 
    else{
      res.status(404).send(`Course Number ${req.params.catalog_nbr} was not found`);
    }
  
});

//Setting up the route for '/api/courses/:subject/:catalog_nbr/:courseComponent'  so user can search for course by all 3 things
router.route("/:subject/:catalog_nbr/:courseComponent").get((req, res) => {
  let subject = data.filter((c) => c.subject == req.params.subject);
  let catalogNbr = subject.filter(
    (c) => c.catalog_nbr == req.params.catalog_nbr
  );
  let courseComponent = catalogNbr.filter(
    (c) => c.course_info[0].ssr_component == req.params.courseComponent
  );

    if (courseComponent.length>0) {
      res.send(courseComponent);
    } 

    else{
      res.status(404).send(`The course was not found`);
    }
 
});

//Retrieving all Schedules from the Database
app.get("/api/schedule", (req, res) => {
  Schedule.find({}, 'scheduleName subject_schedule courseNumber_schedule', function(err, schedule){
    if(err) {
      return console.error(err);
    }
    else{
      res.send(JSON.stringify(schedule));
    }
}); 

});

//Retrieving Schedules based on their Name from the Database
app.get("/api/schedule/:sched_name", (req, res) => {

  Schedule.findOne({scheduleName: req.params.sched_name}, function(err, schedule){
    if(err) {
      console.error(err);
      res.status(400).send(`Schedule ${req.params.sched_name} was not found!`);
    }
    else{
      res.send(JSON.stringify(schedule));
    }
  });
});

//Post request to make a new Schedule and add it to the Database.
app.post("/api/schedule", (req, res, next) => {

  let subjects_data = [];
  let courseNums_data = [];


  for (let i = 0; i < data.length; i++) {
    subjects_data.push(data[i].subject);
    courseNums_data.push(data[i].catalog_nbr);
  }

  let schedule = new Schedule({
    scheduleName:req.body.scheduleName,
    subject_schedule: req.body.subject_schedule
  });

  console.log(req.body.subject_schedule);
  let onlysubjects = [];
  let onlyCourseNumber=[];
  for(let i=0; i<req.body.subject_schedule.length; i++){
    if(i%2==0){
     onlysubjects.push(req.body.subject_schedule[i]);
    }
    else{
      onlyCourseNumber.push(req.body.subject_schedule[i]);
    }
  }

let onlysubjectsLength = onlysubjects.map(function(word){
    return word.length
   });
   console.log("Line 143");

   function subjectsLength(){
     for(let i=0; i<onlysubjectsLength; i++){
       if(onlysubjectsLength[i]>=8){
         return true;
       }
     }
     return false;
   }
 

  let matchingSubjectResult = onlysubjects.every(function(val){
    return subjects_data.indexOf(val)>=0;
  })
 
  console.log(req.body.scheduleName);
  console.log(req.body.subject_schedule);

  if(!req.body.scheduleName){
    res.status(400).send("Schedule Name is required");
  }
  if(req.body.scheduleName.length>16){
    res.status(400).send("Schedule Name is too long.");
  }
  if(matchingSubjectResult==false){
    res.status(400).send("Invalid Subject");
  }

  if(subjectsLength()==true){
    res.status(400).send("Subject Length is too long");
  }

  else{
    schedule.save(function (err) {
      if (err) {
            console.error(err.message);
            res.send(err.message);
          }
      else{
        res.send(req.body);
        console.log('Schedule Created Sucessfully');
        console.log(req.body.scheduleName);
      
        }
    });
  }
        
});

//Creating a Put request to update the Schedule by its Name.
app.put('/api/schedule/:sched_name', function(req,res,next){

  let subjects_data = [];
  let courseNums_data = [];


  for (let i = 0; i < data.length; i++) {
    subjects_data.push(data[i].subject);
    courseNums_data.push(data[i].catalog_nbr);
  }

    let onlysubjects = [];
  for(let i=0; i<req.body.subject_schedule.length; i++){
    if(i%2==0){
     onlysubjects.push(req.body.subject_schedule[i]);
    }
  }
 
  function checkString() {
    for(let i=0; i<onlysubjects.length; i++){
      if(typeof onlysubjects[i] != "string") {
         return false;
       }
    }
    return true;
   }


 let matchingSubjectResult = onlysubjects.every(function(val){
   return subjects_data.indexOf(val)>=0;
 })
 console.log(matchingSubjectResult);
  
  if(!req.body.scheduleName){
    res.status(400).send("Schedule Name is required.");
  }
  if(req.body.scheduleName.length>16){
    res.status(400).send("Schedule Name is too long.");
  }

  if(matchingSubjectResult==false){
    res.status(400).send("Invalid Subject Entered. This subject is not offered at Western University");
  }

  if(checkString()==false){

  }

else{
  Schedule.findOneAndUpdate({scheduleName: req.params.sched_name},req.body).then(function(){
    Schedule.findOne({scheduleName: req.params.sched_name}).then(function(schedule){
      res.send(schedule);
    });
  });
}

});

//Path to delete all Schedules
app.delete('/api/schedule', (req,res,next)=> {
  Schedule.deleteMany({}).then(function(schedule){
  res.send(schedule);
    });
 });

//Path to Delete Schedule by a Given Name
app.delete('/api/schedule/:sched_name', (req,res,next)=> {

    Schedule.findOneAndDelete({scheduleName:req.params.sched_name}).then(function(schedule){
      res.send(schedule);
        }); 
  });


app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
});

app.use("/api/courses", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


