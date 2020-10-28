let coursesButton = document.getElementById("coursesButton");
let coursesList = document.getElementById("coursesList");
let coursesTable = document.getElementById("coursesTable");
let subjectInput = document.getElementById("subject");
let courseNumberInput = document.getElementById("courseNumber");
let componentInput = document.getElementById("courseComponent");
let viewScheduleButton = document.getElementById("viewScheduleButton");
let addScheduleButton = document.getElementById("addScheduleButton");

coursesButton.addEventListener("click", getCourses);

function getCourses() {
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

        let tableDiv = document.getElementById("tableDiv");
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

document.getElementById("search").addEventListener("click", getSubjects);

function getSubjects() {
  fetch(`api/courses/${subjectInput.value}`).then((res) =>
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
        let tableDiv = document.getElementById("tableDiv");
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

document.getElementById("search2").addEventListener("click", getCourseCodes);

function getCourseCodes() {
  fetch(`api/courses/${subjectInput.value}/${courseNumberInput.value}`).then(
    (res) =>
      res.json().then((data) => {
        console.log(res.status);
        let subject = data.filter((c) => c.subject == subjectInput.value);
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
          let tableDiv = document.getElementById("tableDiv");
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

document
  .getElementById("search3")
  .addEventListener("click", getCourseComponent);

function getCourseComponent() {
  fetch(
    `api/courses/${subjectInput.value}/${courseNumberInput.value}/${componentInput.value}`
  ).then((res) =>
    res.json().then((data) => {
      console.log(res.status);
      let subject = data.filter((c) => c.subject == subjectInput.value);
      let catalogNbr = subject.filter(
        (c) => c.catalog_nbr == courseNumberInput.value
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
        let tableDiv = document.getElementById("tableDiv");
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

viewScheduleButton.addEventListener('click', getSchedules);

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
  const newSchedule = {
    scheduleName: document.getElementById("scheduleName").value,
    subject_schedule: document.getElementById("subject_schedule").value,
    courseNumber_schedule: document.getElementById("courseNumber_schedule")
      .value,
  };

  fetch("/api/addschedule", {
    method: "POST",
    body: JSON.stringify(newSchedule),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch(console.log("Failed to get Json Object"));
    })
    .catch();
}
