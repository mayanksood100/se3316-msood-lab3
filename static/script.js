let coursesButton = document.getElementById("coursesButton");
let coursesList = document.getElementById("coursesList");
let coursesTable = document.getElementById("coursesTable");
let subjectInput = document.getElementById("subject");
let courseNumberInput = document.getElementById("courseNumber");
let componentInput = document.getElementById("courseComponent");
let schedulesDiv = document.getElementById("schedulesDiv");
let addScheduleButton = document.getElementById("addScheduleButton");
let deleteScheduleButton = document.getElementById("deleteScheduleButton");
let deleteAll = document.getElementById('deleteAll');
let numberOfCourses = document.getElementById('numberOfCourses');

coursesButton.addEventListener("click", getCourses);
getCourses();
function getCourses() {

  let tableDiv = document.getElementById("tableDiv");
  if(tableDiv.hasChildNodes){
    removeItems();
    }
  fetch("/api/courses").then((res) =>
    res.json().then((data) => {
      for (let i = 0; i < data.length; i++) {
        let heading = document.createElement("h3");
        let longDescription = document.createElement("p");

        heading.appendChild(
          document.createTextNode(
            data[i].subject.toUpperCase() +
              " " +
              data[i].catalog_nbr +
              " - " +
              data[i].className
          )
        );
        longDescription.appendChild(
          document.createTextNode("Description: " + data[i].catalog_description)
        );

        tbl = document.createElement("table");
        tbl.id = "coursesTables";

        for (let j = 0; j < 2; j++) {
          let tr = tbl.insertRow();
          for (let k = 0; k < 9; k++) {
            if (j == 2 && k == 1) {
              break;
            } else {
              let td = tr.insertCell();
              td.id = "tableData";

              if (j == 0 && k == 0) {
                td.appendChild(document.createTextNode("Section"));
              }
              if (j == 0 && k == 1) {
                td.appendChild(document.createTextNode("Component"));
              }
              if (j == 0 && k == 2) {
                td.appendChild(document.createTextNode("Class Number"));
              }
              if (j == 0 && k == 3) {
                td.appendChild(document.createTextNode("Start Time"));
              }
              if (j == 0 && k == 4) {
                td.appendChild(document.createTextNode("End Time"));
              }
              if (j == 0 && k == 5) {
                td.appendChild(document.createTextNode("Location"));
              }
              if (j == 0 && k == 6) {
                td.appendChild(
                  document.createTextNode("Requistes and Constraints")
                );
              }
              if (j == 0 && k == 7) {
                td.appendChild(document.createTextNode("Status"));
              }
              if (j == 0 && k == 8) {
                td.appendChild(document.createTextNode("Campus"));
              }
              if (j == 1 && k == 0) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_section)
                );
              }
              if (j == 1 && k == 1) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].ssr_component)
                );
              }
              if (j == 1 && k == 2) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_nbr)
                );
              }
              if (j == 1 && k == 3) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].start_time)
                );
              }
              if (j == 1 && k == 4) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].end_time)
                );
              }
              if (j == 1 && k == 5) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].facility_ID)
                );
              }
              if (j == 1 && k == 6) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].descr)
                );
              }
              if (j == 1 && k == 7) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].enrl_stat)
                );
              }
              if (j == 1 && k == 8) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].campus)
                );
              }
            }
          }
        }
        tableDiv.appendChild(heading);
        tableDiv.appendChild(longDescription);
        tableDiv.appendChild(tbl);

        if (data[i].course_info[0].ssr_component == "TUT") {
          tbl.style.color = "red";
        }

        if (data[i].course_info[0].ssr_component == "LAB") {
          tbl.style.color = "blue";
        }
      }
    })
  );
}

function removeItems(){
  let tableDiv= document.getElementById('tableDiv');
  while (tableDiv.firstChild) {
    tableDiv.removeChild(tableDiv.lastChild);
  }
}
function clearSchedulesDiv(){
    let schedulesDiv = document.getElementById('schedulesDiv');
      schedulesDiv.lastChild.innerText="";
}

document.getElementById("search").addEventListener("click", getSubjects);
function getSubjects() {

  let tableDiv = document.getElementById("tableDiv");
  if(tableDiv.hasChildNodes){
  removeItems();
  }

  fetch(`/api/courses/${subjectInput.value.toUpperCase()}`).then((res) =>
    res.json().then((data) => {
      let subject = data.filter(
        (c) => c.subject == subjectInput.value.toUpperCase()
      );
      for (let i = 0; i < subject.length; i++) {
        let heading = document.createElement("h3");
        let longDescription = document.createElement("p");

        heading.appendChild(
          document.createTextNode(
            data[i].subject.toUpperCase() +
              " " +
              data[i].catalog_nbr +
              " - " +
              data[i].className
          )
        );
        longDescription.appendChild(
          document.createTextNode("Description: " + data[i].catalog_description)
        );

        tbl = document.createElement("table");
        tbl.id = "coursesTables";

        for (let j = 0; j < 2; j++) {
          let tr = tbl.insertRow();
          for (let k = 0; k < 9; k++) {
            if (j == 2 && k == 1) {
              break;
            } else {
              let td = tr.insertCell();
              td.id = "tableData";

              if (j == 0 && k == 0) {
                td.appendChild(document.createTextNode("Section"));
              }
              if (j == 0 && k == 1) {
                td.appendChild(document.createTextNode("Component"));
              }
              if (j == 0 && k == 2) {
                td.appendChild(document.createTextNode("Class Number"));
              }
              if (j == 0 && k == 3) {
                td.appendChild(document.createTextNode("Start Time"));
              }
              if (j == 0 && k == 4) {
                td.appendChild(document.createTextNode("End Time"));
              }
              if (j == 0 && k == 5) {
                td.appendChild(document.createTextNode("Location"));
              }
              if (j == 0 && k == 6) {
                td.appendChild(
                  document.createTextNode("Requistes and Constraints")
                );
              }
              if (j == 0 && k == 7) {
                td.appendChild(document.createTextNode("Status"));
              }
              if (j == 0 && k == 8) {
                td.appendChild(document.createTextNode("Campus"));
              }
              if (j == 1 && k == 0) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_section)
                );
              }
              if (j == 1 && k == 1) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].ssr_component)
                );
              }
              if (j == 1 && k == 2) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_nbr)
                );
              }
              if (j == 1 && k == 3) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].start_time)
                );
              }
              if (j == 1 && k == 4) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].end_time)
                );
              }
              if (j == 1 && k == 5) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].facility_ID)
                );
              }
              if (j == 1 && k == 6) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].descr)
                );
              }
              if (j == 1 && k == 7) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].enrl_stat)
                );
              }
              if (j == 1 && k == 8) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].campus)
                );
              }
            }
          }
        }
        
        tableDiv.appendChild(heading);
        tableDiv.appendChild(longDescription);
        tableDiv.appendChild(tbl);

        if (data[i].course_info[0].ssr_component == "TUT") {
          tbl.style.color = "red";
        }

        if (data[i].course_info[0].ssr_component == "LAB") {
          tbl.style.color = "blue";
        }
        subjectInput.value="";
      }
    })
  );
}

document.getElementById("search2").addEventListener("click", getCourseCodes);

function getCourseCodes() {

  let tableDiv = document.getElementById("tableDiv");
  if(tableDiv.hasChildNodes){
    removeItems();
    }

  fetch(`/api/courses/${subjectInput.value.toUpperCase()}/${courseNumberInput.value}`).then(
    (res) =>
      res.json().then((data) => {
        console.log(res.status);
        let subject = data.filter((c) => c.subject == subjectInput.value.toUpperCase());
        let catalogNbr = subject.filter(
          (c) => c.catalog_nbr == courseNumberInput.value
        );
        for (let i = 0; i < catalogNbr.length; i++) {
          let heading = document.createElement("h3");
          let longDescription = document.createElement("p");

          heading.appendChild(
            document.createTextNode(
              data[i].subject.toUpperCase() +
                " " +
                data[i].catalog_nbr +
                " - " +
                data[i].className
            )
          );
          longDescription.appendChild(
            document.createTextNode(
              "Description: " + data[i].catalog_description
            )
          );

          tbl = document.createElement("table");
          tbl.id = "coursesTables";

          for (let j = 0; j < 2; j++) {
            let tr = tbl.insertRow();
            for (let k = 0; k < 9; k++) {
              if (j == 2 && k == 1) {
                break;
              } else {
                let td = tr.insertCell();
                td.id = "tableData";

                if (j == 0 && k == 0) {
                  td.appendChild(document.createTextNode("Section"));
                }
                if (j == 0 && k == 1) {
                  td.appendChild(document.createTextNode("Component"));
                }
                if (j == 0 && k == 2) {
                  td.appendChild(document.createTextNode("Class Number"));
                }
                if (j == 0 && k == 3) {
                  td.appendChild(document.createTextNode("Start Time"));
                }
                if (j == 0 && k == 4) {
                  td.appendChild(document.createTextNode("End Time"));
                }
                if (j == 0 && k == 5) {
                  td.appendChild(document.createTextNode("Location"));
                }
                if (j == 0 && k == 6) {
                  td.appendChild(
                    document.createTextNode("Requistes and Constraints")
                  );
                }
                if (j == 0 && k == 7) {
                  td.appendChild(document.createTextNode("Status"));
                }
                if (j == 0 && k == 8) {
                  td.appendChild(document.createTextNode("Campus"));
                }
                if (j == 1 && k == 0) {
                  td.appendChild(
                    document.createTextNode(
                      data[i].course_info[0].class_section
                    )
                  );
                }
                if (j == 1 && k == 1) {
                  td.appendChild(
                    document.createTextNode(
                      data[i].course_info[0].ssr_component
                    )
                  );
                }
                if (j == 1 && k == 2) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].class_nbr)
                  );
                }
                if (j == 1 && k == 3) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].start_time)
                  );
                }
                if (j == 1 && k == 4) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].end_time)
                  );
                }
                if (j == 1 && k == 5) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].facility_ID)
                  );
                }
                if (j == 1 && k == 6) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].descr)
                  );
                }
                if (j == 1 && k == 7) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].enrl_stat)
                  );
                }
                if (j == 1 && k == 8) {
                  td.appendChild(
                    document.createTextNode(data[i].course_info[0].campus)
                  );
                }
              }
            }
          }
        
          tableDiv.appendChild(heading);
          tableDiv.appendChild(longDescription);
          tableDiv.appendChild(tbl);

          if (data[i].course_info[0].ssr_component == "TUT") {
            tbl.style.color = "red";
          }

          if (data[i].course_info[0].ssr_component == "LAB") {
            tbl.style.color = "blue";
          }
          subjectInput.value="";
          courseNumberInput.value="";
        }
      })
  );
}

document
  .getElementById("search3")
  .addEventListener("click", getCourseComponent);

function getCourseComponent() {

  let tableDiv = document.getElementById("tableDiv");
  if(tableDiv.hasChildNodes){
    removeItems();
    }

  fetch(
    `/api/courses/${subjectInput.value.toUpperCase()}/${courseNumberInput.value.toString()}/${componentInput.value}`
  ).then((res) =>
    res.json().then((data) => {
      console.log(res.status);
      let subject = data.filter((c) => c.subject == subjectInput.value.toUpperCase());
      let catalogNbr = subject.filter(
        (c) => c.catalog_nbr.toString() == courseNumberInput.value
      );
      let courseComponent = catalogNbr.filter(
        (c) => c.course_info[0].ssr_component == componentInput.value
      );
      console.log(courseComponent);
      for (let i = 0; i < courseComponent.length; i++) {
        let heading = document.createElement("h3");
        let longDescription = document.createElement("p");

        heading.appendChild(
          document.createTextNode(
            data[i].subject.toUpperCase() +
              " " +
              data[i].catalog_nbr +
              " - " +
              data[i].className
          )
        );
        longDescription.appendChild(
          document.createTextNode("Description: " + data[i].catalog_description)
        );

        tbl = document.createElement("table");
        tbl.id = "coursesTables";

        for (let j = 0; j < 2; j++) {
          let tr = tbl.insertRow();
          for (let k = 0; k < 9; k++) {
            if (j == 2 && k == 1) {
              break;
            } else {
              let td = tr.insertCell();
              td.id = "tableData";

              if (j == 0 && k == 0) {
                td.appendChild(document.createTextNode("Section"));
              }
              if (j == 0 && k == 1) {
                td.appendChild(document.createTextNode("Component"));
              }
              if (j == 0 && k == 2) {
                td.appendChild(document.createTextNode("Class Number"));
              }
              if (j == 0 && k == 3) {
                td.appendChild(document.createTextNode("Start Time"));
              }
              if (j == 0 && k == 4) {
                td.appendChild(document.createTextNode("End Time"));
              }
              if (j == 0 && k == 5) {
                td.appendChild(document.createTextNode("Location"));
              }
              if (j == 0 && k == 6) {
                td.appendChild(
                  document.createTextNode("Requistes and Constraints")
                );
              }
              if (j == 0 && k == 7) {
                td.appendChild(document.createTextNode("Status"));
              }
              if (j == 0 && k == 8) {
                td.appendChild(document.createTextNode("Campus"));
              }
              if (j == 1 && k == 0) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_section)
                );
              }
              if (j == 1 && k == 1) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].ssr_component)
                );
              }
              if (j == 1 && k == 2) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].class_nbr)
                );
              }
              if (j == 1 && k == 3) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].start_time)
                );
              }
              if (j == 1 && k == 4) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].end_time)
                );
              }
              if (j == 1 && k == 5) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].facility_ID)
                );
              }
              if (j == 1 && k == 6) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].descr)
                );
              }
              if (j == 1 && k == 7) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].enrl_stat)
                );
              }
              if (j == 1 && k == 8) {
                td.appendChild(
                  document.createTextNode(data[i].course_info[0].campus)
                );
              }
            }
          }
        }
        tableDiv.appendChild(heading);
        tableDiv.appendChild(longDescription);
        tableDiv.appendChild(tbl);

        if (data[i].course_info[0].ssr_component == "TUT") {
          tbl.style.color = "red";
        }

        if (data[i].course_info[0].ssr_component == "LAB") {
          tbl.style.color = "blue";
        }
        subjectInput.value="";
        courseNumberInput.value="";
        componentInput.value="";
      }
    })
  );
}

document.getElementById("numberButton").addEventListener('click', makeInputs);
let subjects_db=[];
let courseNumber_db=[];
let newSubject;
let newCourseNumber;

function makeInputs(){
  
  for(let i=1; i<=numberOfCourses.value; i++){
   
    newSubject = document.createElement("input");
    newCourseNumber = document.createElement("input");
    newSubject.setAttribute("type", "text");
    newCourseNumber.setAttribute("type", "text");
    newSubject.setAttribute("placeholder", " Subject "+ i);
    newCourseNumber.setAttribute("placeholder", " Course Number " + i);
    newSubject.setAttribute("id", "subject_schedule"+i);
    newCourseNumber.setAttribute("id", "courseNumber_schedule"+i);
    document.getElementById('dynamicInputs').appendChild(newSubject);
    document.getElementById('dynamicInputs').appendChild(newCourseNumber);
    
  }
}

function getSchedules() {
  fetch("/api/schedule").then((res) => {
    res.json().then((data) => {
      console.log(data);
      let schedulesDiv = document.getElementById("schedulesDiv");
      let ol = document.getElementById("orderedList");
      data.forEach(e=>{
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(`${e.scheduleName}: ${e.subject_schedule}-${e.courseNumber_schedule}`));
        ol.appendChild(item);
        schedulesDiv.appendChild(ol);
      })
    });
  });
}

addScheduleButton.addEventListener("click", addSchedules);
function addSchedules() {

  if(schedulesDiv.hasChildNodes){
    clearSchedulesDiv();
  }

  const newSchedule = {
    scheduleName: document.getElementById("scheduleName").value,
    subject_schedule: document.getElementById("subject_schedule").value,
    courseNumber_schedule: document.getElementById("courseNumber_schedule").value,
  };

  fetch("/api/schedule", {
    method: "POST",
    body: JSON.stringify(newSchedule),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if(res.ok){
      res
        .json()
        .then((data) => {
          console.log(data);
          getSchedules();
          document.getElementById('status').innerText = (`Successfuly added the Schedule`);
        })
        .catch(err=>console.log("Failed to get Json Object"));
      }
      else{
        console.log('Error:', res.status);
        document.getElementById('status').innerText = (`Failed to add the Schedule`);
      }
    })
    .catch();

    document.getElementById("scheduleName").value="";
    document.getElementById("subject_schedule").value="";
    document.getElementById("courseNumber_schedule").value="";

    
    for(let i=1; i<=numberOfCourses.value;i++){
      subjects_db.push(document.getElementById(`subject_schedule${[i]}`.value));
      courseNumber_db.push(document.getElementById(`courseNumber_schedule${[i]}`.value));
    }
    console.log(subjects_db);
    console.log(courseNumber_db);
}

deleteAll.addEventListener('click', deleteSchedules);
function deleteSchedules(){
  fetch('/api/schedule', {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
  .then((res)=>{
    if(res.ok){
      res.json()
      .then((data) => {
        console.log(data);
        getSchedules();
      })
      .catch(err=>console.log("Failed to get Json Object"))
    }
    else{
      console.log('Error:', res.status);
      }
  });
};

deleteScheduleButton.addEventListener('click', deleteScheduleByName);
function deleteScheduleByName(){

    if(schedulesDiv.hasChildNodes){
      clearSchedulesDiv();
    }

  const deleteSched = {
    deleteScheduleName: document.getElementById("deleteScheduleName").value,
  };

  console.log(deleteSched.deleteScheduleName);
  fetch(`/api/schedule/${deleteSched.deleteScheduleName}`, {
    method: "DELETE",
    body: JSON.stringify(deleteSched),
    headers: { "Content-Type": "application/json" },
  })
  .then((res)=>{
    if(res.ok){
      res.json()
      .then((data) => {
        console.log(data);
        getSchedules();
        document.getElementById('status').innerText = (`Successfuly deleted the Schedule "${deleteSched.deleteScheduleName}"`);
      })
      .catch(err=>console.log("Failed to get Json Object"))
    }
    else{
    console.log('Error:', res.status);
    document.getElementById('deleteStatus').innerText = (`Failed to delete the Schedule  "${deleteSched.deleteScheduleName}"`);
    }
    document.getElementById("deleteScheduleName").value="";

});
};

document.getElementById('editScheduleButton').addEventListener('click', editSchedule);
function editSchedule(){
  const editSchedule = {
    editScheduleName: document.getElementById("editScheduleName").value,
    edit_subject_schedule: document.getElementById("edit_subject_schedule").value,
    edit_courseNumber_schedule: document.getElementById("edit_courseNumber_schedule").value,
  };

  fetch(`/api/schedule/${editSchedule.editScheduleName}`, {
    method: "PUT",
    body: JSON.stringify(editSchedule),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if(res.ok){
      res
        .json()
        .then((data) => {
          console.log(data);
          getSchedules();
          //document.getElementById('status').innerText = (`Successfuly added the Schedule`);
        })
        .catch(err=>console.log("Failed to get Json Object"));
      }
      else{
        console.log('Error:', res.status);
        //document.getElementById('status').innerText = (`Failed to add the Schedule`);
      }
    })
    .catch();

    document.getElementById("editScheduleName").value="";
    document.getElementById("edit_subject_schedule").value="";
    document.getElementById("edit_courseNumber_schedule").value="";
}



