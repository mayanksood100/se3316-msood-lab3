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
let combined_db=[];
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
  document.getElementById("numberOfCourses").disabled=true;
}

document.getElementById('viewSchedulesButton').addEventListener('click', getSchedules);
let numCoursesInSchedule = [];
//Function to display all of the Schedules in the Database
function getSchedules() {

  if(schedulesDiv.hasChildNodes){
    clearSchedulesDiv();
  }

  fetch("/api/schedule").then((res) => {
    res.json().then((data) => {
      console.log(data);
      let schedulesDiv = document.getElementById("schedulesDiv");
      let ol = document.getElementById("orderedList");
      for(let i=0; i<data.length; i++){
        numCoursesInSchedule.push((data[i].subject_schedule.length)/2);
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(`${data[i].scheduleName} - ${numCoursesInSchedule[i]} Courses: ${data[i].subject_schedule}`));
        ol.appendChild(item);
        schedulesDiv.appendChild(ol);
      }
      console.log(numCoursesInSchedule);
    });
  });
}

document.getElementById("viewScheduleButton").addEventListener('click', viewScheduleByName);
function viewScheduleByName(){

  fetch(`/api/schedule/${document.getElementById("viewScheduleName").value}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
        let viewScheduleByNameDiv = document.getElementById("viewScheduleByNameDiv");
        let ul = document.getElementById("viewScheduleList");
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(`${data.scheduleName}: ${data.subject_schedule}`));
        ul.appendChild(item);
        viewScheduleByNameDiv.appendChild(ul); 
    });
  });
  document.getElementById("viewScheduleName").value = "";
  document.getElementById("viewScheduleButton").disabled = true;
}

addScheduleButton.addEventListener("click", addSchedules);
//Function to create a new Schedule
function addSchedules() {

  if(schedulesDiv.hasChildNodes){
    clearSchedulesDiv();
  }

  for(let i=1; i<=numberOfCourses.value; i++){
    subjects_db.push(document.getElementById(`subject_schedule${i}`).value);
    courseNumber_db.push(document.getElementById(`courseNumber_schedule${i}`).value);
  }
   combined_db = subjects_db.map((element, index) => [element, courseNumber_db[index]]
   ).flat();
  console.log(combined_db);

  const newSchedule = {
    scheduleName: document.getElementById("scheduleName").value,
    subject_schedule: combined_db
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
        .catch(err=>{
          console.log("Failed to get Json Object");
        });
      }
      else{
        console.log('Error:', res.status);
        //res.send('Error', res.status);
        document.getElementById('status').innerText = (`Failed to add the Schedule`);
      }
    })
    .catch();

    document.getElementById("numberOfCourses").value="";
    document.getElementById("scheduleName").value="";
    
}

deleteAll.addEventListener('click', deleteSchedules);
//Function to delete All Schedules
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
//Function to Delete Schedule by Given Name
function deleteScheduleByName(){

    if(schedulesDiv.hasChildNodes){
      clearSchedulesDiv();
    }

  const deleteSched = {
    deleteScheduleName: document.getElementById("deleteScheduleName").value,
  };

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


let edited_subjects_db=[];
let edited_courseNumber_db=[];
let edited_combined_db=[];

document.getElementById("confirmEdit").addEventListener('click', confirmEdit);

function confirmEdit(){
  let scheduleNames=[];
  let scheduleCourses=[];
  console.log(document.getElementById('editScheduleName').value);
  fetch(`/api/schedule/${document.getElementById('editScheduleName').value}`)
    .then((res) => {res.json()
    .then((data) => {
       scheduleNames.push(data.scheduleName);
       scheduleCourses.push(data.subject_schedule);
      console.log(scheduleCourses);
     let editScheduleInput = document.getElementById("editScheduleName").value;
     console.log(editScheduleInput);
 
      if(scheduleNames.includes(editScheduleInput)){
        console.log("Yes it matches");

        for(let i=1; i<=data.subject_schedule.length/2; i++){
          let editSubject = document.createElement("input");
          let editCourseNumber = document.createElement("input");
          editSubject.setAttribute("type", "text");
          editCourseNumber.setAttribute("type", "text");
          editSubject.setAttribute("placeholder", " Subject "+ i);
          editCourseNumber.setAttribute("placeholder", " Course Number " + i);
          editSubject.setAttribute("id", "edit_subject_schedule"+i);
          editCourseNumber.setAttribute("id", "edit_courseNumber_schedule"+i);
          document.getElementById('editDynamicInputs').appendChild(editSubject);
          document.getElementById('editDynamicInputs').appendChild(editCourseNumber);
        }
      }
      else {
        console.log("No it doesn't match");
      }
    
    })
  })
}

document.getElementById("confirmChanges").addEventListener('click', confirmChanges);
function confirmChanges(){
    fetch(`/api/schedule/${document.getElementById('editScheduleName').value}`)
  .then((res) => {res.json()
  .then((data) => {
      for(let i=1; i<=data.subject_schedule.length/2;i++){
    edited_subjects_db.push(document.getElementById(`edit_subject_schedule${i}`).value);
    edited_courseNumber_db.push(document.getElementById(`edit_courseNumber_schedule${i}`).value);
  }
   edited_combined_db = edited_subjects_db.map((element, index) => [element, edited_courseNumber_db[index]]
   ).flat();
  console.log(edited_combined_db);
  combined_db = edited_combined_db;
  console.log(combined_db);
  })
})

return edited_combined_db;

}

document.getElementById('editScheduleButton').addEventListener('click', editSchedule);
//Function to Edit Schedule by Name
function editSchedule(){

  if(schedulesDiv.hasChildNodes){
    clearSchedulesDiv();
  }

  confirmChanges();
  const editSchedule = {
    scheduleName: document.getElementById("editScheduleName").value,
    subject_schedule: edited_combined_db
  };

  console.log(editSchedule);

  fetch(`/api/schedule/${document.getElementById('editScheduleName').value}`, {
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
}



