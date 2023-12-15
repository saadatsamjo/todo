import {theProjects} from "./index.js"
let projectIdTracker = 1;
const projectsElement = document.querySelector('.the-projects');


                                      // ##############################################
                                                // LOCAL DOM.JS FUNCTIONS, VARS
                                      // ##############################################




// FUNCTION - APPEND LATEST ADDED/CREATED PROJECT
// Appends new project to the theProjects
function appendnewProject(newProject){
    theProjects.push(newProject);
}






// SHOWING THE SEE-ALL-PROJECTS BUTTON
// shows the button to see all projects in the side menu if the projects are not all seen
function showTheSeeAllProjectsButton(){
    let seeAllelement = document.querySelector(".see-all-button")
    seeAllelement.style.display = 'block';
}






// FUNCTION & LISTENER - DELETE A PROJECT
// deletes a project from the theProjects array onlick of target, delete icon
export function deleteProject(thisId) {
  const indexToRemove = theProjects.findIndex(project => project.projectId === thisId);

  if (indexToRemove !== -1) {
    theProjects.splice(indexToRemove, 1);
    console.log('project deleted');
    showTheProjects(theProjects); // Update the DOM with the modified array
    showTheProjectsInSideNav();
  }
}
  





// FUNCTION - COUNT NUMBER OF DAYS FOR THE PROJECT
// counts the total days for the project period
function countProjectDays(period){
        // counting no of days in the PROJECT
        let days;

        // Assign 'days' based on the 'period'
        switch (period) {
            case 'week':
                days = 7;
                break;
            case 'month':
                days = 30; // Assuming a month has 30 days
                break;
            case '3months':
                days = 90; // Assuming 3 months have 90 days
                break;
            default:
                days = 0; // Default value or handle other cases
        }
        return days;
}






                                    // ##############################################
                                                // EXPORTED FUNCTIONS, VARS
                                    // ##############################################






                                    //-----        the projects         -----//
// FUNCTION - CREATE A PROJECT OBJECT
// creates the PROJECT object and appends it to the PROJECTS array
export function createProjectObject(name,description,period){
    // Date Format options
    const dateOptions = {
        day: 'numeric', // day of month 
        month: 'long', // full month name
        hour: 'numeric',
        minute: 'numeric'    
    };

    // Create Date object
    const now = new Date();  
    // Format date
    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

    //tasks tracker /number of tasks the project got
    
    let newProject = {
        'taskTracker' : 0,
        'name': name,
        'description': description,
        'period': period,
        'timeCreated': formattedDate,
        'days': countProjectDays(period),
        'tasks':[],
        'projectId': projectIdTracker++
    }

    // console.log(newProject.projectId);
    appendnewProject(newProject);
    showTheProjectsInSideNav();
}





// FUNCTION - SHOW THE PROJECTS
// appends the projects DOM inner HTML to the DOMS projects div
export function showTheProjects(theProjects) {
                document.querySelector('.the-projects').style.backgroundColor = "white";


                if(theProjects.length > 0)//For when there are 0 projects to display
                
                {
                  let tableHTML = `
                  <table>
                    <tr>
                      <th></th>
                      <th>Project Name</th>  
                      <th>Description</th>
                      <th>Date</th>
                      <th>Actions</th>
                      <th>Tasks</th>
                      <th>Delete</th>
                    </tr>
                `;
              
                theProjects.forEach(project => {
              
                  let rowHTML = `
                    <tr>
                      <td>${project.days} days</td>
                      <td>${project.name}</td>
                      <td>${project.description}</td>
                      <td>${project.timeCreated}</td> 
                      <td>Edit</td>
                      <td>${project.taskTracker} Tasks <i class="fa fa-plus" aria-hidden="true" onclick="displayNewTasktForm(${project.projectId})"></i></td>
                      <!-- <td>${project.taskTracker} Taskis <i class="fa fa-plus" aria-hidden="true" onclick="displayNewTasktForm()"></i></td> -->
                      <td><i id="delete-project${project.projectId}" class="fa fa-trash" aria-hidden="true" onclick="deleteThisProject(${project.projectId})"></i></td>
                    </tr>
                  `;
              
                  tableHTML += rowHTML;
              
                });
              
                tableHTML += `</table>`;
              
                const projectList = document.querySelector('.the-projects');
                projectList.innerHTML = tableHTML;
                } 
    
    
    
         else {
          const projectList = document.querySelector('.the-projects');
          projectList.style.backgroundColor = "#91a7de";
          projectList.innerHTML = "<h1 class='empty-projects-text'>Empty projects!</h1>";
        }
  }



// FUNCTION - SHOW 5 LATEST PROJECTS IN THE SIDEBAR (if maximumProjectsOnTheSideMenu = 5)
// shows the projects names in the sidenav, 5 lates ones
export function showTheProjectsInSideNav(){
  let maximumProjectsOnTheSideMenu = 5;


  // shows the see all link/button
  if (theProjects.length > maximumProjectsOnTheSideMenu){showTheSeeAllProjectsButton()}


  const latestProjects = theProjects.slice(-(maximumProjectsOnTheSideMenu));
  
      let theProjectsDiv = document.querySelector('.projects-dropdown');
      theProjectsDiv.innerHTML = '';
  
      // Use a for loop with a reverse counter
      for (let i = latestProjects.length - 1; i >= 0; i--) {
          const project = latestProjects[i];
      
          let newProjectHTML = 
          `
              <p class="sub-menu-option project-selector-in-side-menu">${project.name}</p>
          `;
      
          theProjectsDiv.innerHTML += newProjectHTML;
      }
}





                                      //------    the tasks   ------//
//FUNCTION - GENERATE UNIQ TASK IDS
//unique ids for tasks 
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


/// FUNCTION - CREATE A TASK OBJECT
// creates the task object and appends it to the tasks array of the passed project
export function createTaskObject(newTaskName, newTaskDueDate, projectId) {
  let newTask = {
      'name': newTaskName,
      'dueDate': newTaskDueDate,
      'taskId': generateUniqueId() // generating and assigning a unique task ID
  };

  addTask(newTask, projectId);
}



// FUNCTION - SHOW THE TASKS
// shows 
export function showTheTasks(theTasks){

}





// FUNCTION - ADD TASK TO PROJECT
// adds/appends the task to the tasks array value of the passed project
export function addTask(task, projectID) {

}






// FUNCTION & LISTENER - DELETE A TASK
// deletes a task from the the Tasks array onlick of target, delete option
export function deleteTask(thisId) {

}
  


