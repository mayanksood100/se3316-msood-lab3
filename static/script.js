let coursesButton = document.getElementById('coursesButton');
let coursesList = document.getElementById('coursesList');
let coursesTable = document.getElementById('coursesTable');
coursesButton.addEventListener('click', getCourses);

function getCourses(){
    fetch("/api/courses")
    .then(res=>res.json()
    .then(data=>{
        console.log(data);

        for(let i=0; i<data.length; i++){

            let heading = document.createElement('h3');
            let longDescription = document.createElement("p");
            
            heading.appendChild(document.createTextNode(data[i].subject.toUpperCase() + " " + data[i].catalog_nbr +  " - " + data[i].className));

            longDescription.appendChild(document.createTextNode(data[i].catalog_description));
           
            


            tbl  = document.createElement('table');
            tbl.id = 'coursesTables';
           
            for(let j = 0; j < 2; j++){
                let tr = tbl.insertRow();
                for(let k = 0; k < 9; k++){
                    if(j == 2 && k == 1){
                        break;
                    } else {
                       

                        let td = tr.insertCell();
                        td.id = "tableData"
                        //td.style.border = '1px solid black';
                        if(j == 0 && k == 0){
                            td.appendChild(document.createTextNode('Section'));
                        }
                        if(j == 0 && k == 1){
                            td.appendChild(document.createTextNode('Component')); 
                        }
                        if(j == 0 && k == 2){
                            td.appendChild(document.createTextNode('Class Number')); 
                        }
                        if(j == 0 && k == 3){
                            td.appendChild(document.createTextNode('Start Time')); 
                        }
                        if(j == 0 && k == 4){
                            td.appendChild(document.createTextNode('End Time')); 
                        }
                        if(j == 0 && k == 5){
                            td.appendChild(document.createTextNode('Location')); 
                        }
                        if(j == 0 && k == 6){
                            td.appendChild(document.createTextNode('Requistes and Constraints')); 
                        }
                        if(j == 0 && k == 7){
                            td.appendChild(document.createTextNode('Status')); 
                        }
                        if(j == 0 && k == 8){
                            td.appendChild(document.createTextNode('Campus')); 
                        }
                        if(j == 1 && k == 0){
                            td.appendChild(document.createTextNode(data[i].course_info[0].class_section));
                        }
                        if(j == 1 && k == 1){
                            td.appendChild(document.createTextNode(data[i].course_info[0].ssr_component)); 
                        }
                        if(j == 1 && k == 2){
                            td.appendChild(document.createTextNode(data[i].course_info[0].class_nbr)); 
                        }
                        if(j == 1 && k == 3){
                            td.appendChild(document.createTextNode(data[i].course_info[0].start_time)); 
                        }
                        if(j == 1 && k == 4){
                            td.appendChild(document.createTextNode(data[i].course_info[0].end_time)); 
                        }
                        if(j == 1 && k == 5){
                            td.appendChild(document.createTextNode(data[i].course_info[0].facility_ID)); 
                        }
                        if(j == 1 && k == 6){
                            td.appendChild(document.createTextNode(data[i].course_info[0].descr)); 
                        }
                        if(j == 1 && k == 7){
                            td.appendChild(document.createTextNode(data[i].course_info[0].enrl_stat)); 
                        }
                        if(j == 1 && k == 8){
                            td.appendChild(document.createTextNode(data[i].course_info[0].campus)); 
                        }
                    }
                }
            }
             let tableDiv = document.getElementById('tableDiv');
             tableDiv.appendChild(heading);
             tableDiv.appendChild(longDescription);
             tableDiv.appendChild(tbl);
           
        }
    })
    )
}
