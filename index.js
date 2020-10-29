const express = require("express");
const app = express();
const fs = require("fs");
app.use("/", express.static("static"));
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const router = express.Router();
const port = 3000;

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
router
  .route("/")
  .get((req, res) => {
    res.send(data);
  })


//Setting up the route for '/api/courses/:subject' so user can search for course by just Subject.
router
  .route("/:subject")
  .get((req, res) => {
    let subject = data.filter((c) => c.subject == req.params.subject);
    for (let i = 0; i < subject.length; i++) {
      if (subject) {
        res.send(subject);
      } else {
        res.status(404).send(`Subject ${subject} was not found`);
      }
    }
  })

//Setting up the route for '/api/courses/:subject/:catalog_nbr'  so user can search for course by subject+courseCode.
router
  .route("/:subject/:catalog_nbr")
  .get((req, res) => {
    let subject = data.filter((c) => c.subject == req.params.subject);
    let catalogNbr = subject.filter(c => c.catalog_nbr==(req.params.catalog_nbr));
    for (let i = 0; i < catalogNbr.length; i++) {
      if (catalogNbr) {
        res.send(catalogNbr);
      } else {
        res.status(404).send(`Course Number ${catalogNbr} was not found`);
      }
    }
  })


//Setting up the route for '/api/courses/:subject/:catalog_nbr/:courseComponent'  so user can search for course by all 3 things
router
.route("/:subject/:catalog_nbr/:courseComponent")
.get((req, res) => {
    let subject = data.filter((c) => c.subject == req.params.subject);
    let catalogNbr = subject.filter(c => c.catalog_nbr==(req.params.catalog_nbr));
    let courseComponent = catalogNbr.filter(c=> c.course_info[0].ssr_component == req.params.courseComponent);

  for (let i = 0; i < courseComponent.length; i++) {
    if (courseComponent) {
      res.send(courseComponent);
    } else {
      res.status(404).send(`The course was not found`);
    }
  }
})


const allSchedules = [];

app.get('/api/schedule', (req,res)=>{
  res.send(allSchedules);
          });

app.post('/api/addschedule', (req,res)=>{
    const newSchedule = req.body;
    console.log(newSchedule);
   if(newSchedule.scheduleName){
    allSchedules.push(newSchedule);
    res.send(newSchedule);
   }
   else{
     res.status(400).send("Missing Name/Name already exists");
   }
    
});



app.use("/api/courses", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
