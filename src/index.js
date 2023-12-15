import {createProjectObject, showTheProjects, showTheProjectsInSideNav, deleteProject} from "./dom.js"
import {createTaskObject, showTheTasks,addTask, deleteTask} from "./dom.js"
export const { uuid } = window;


// -------------------------------------------------GLOBALS------------------------------------------------------//
//VAR - THE ARRAY OF project OBJECTS
// exported to the dom.js to be used in the function to append projects to the projectSarray, the appendnewProject()
export let theProjects = [];

showTheProjects(theProjects); // Update the DOM with the modified array
showTheProjectsInSideNav();



//-----------------------------------------------THE PROJECTS---------------------------------------------------//
//FUNCTION - DISPLAYING THE NEW PROJ FORM
// displays the form for creating a new project (e.g when the new projcet button is clicked)
window.displayNewProjectForm = function() {
    let theForm = $('.project-form-container');
    theForm.css({
        'display': 'block',
    });
};





//FUNCTION - HIDING THE NEW PROJ FORM
// hides the form back to display none
window.hideNewProjectForm = function() {
    let theForm = $('.project-form-container');
    theForm.css({
        'display': 'none',
    });
};





//FUNCTION - HANDLING A NEW PROJECT SUBMISSION
// collects the form info,  creates a new project object, displays the new projcets
window.handleNewProjectSubmission = function(event){
    event.preventDefault();
    let newProjectName = $("#project-name").val()
    let newProjectDescription = $("#project-notes").val()
    let newProjectPeriod = $("input[name='period']:checked").val()
    // console.log(newProjectPeriod)
    if (newProjectPeriod!= 'week' && newProjectPeriod != 'month' && newProjectPeriod != '3months') {
        alert("Please, enter a project period!")
    } else{
        hideNewProjectForm();
        createProjectObject(newProjectName, newProjectDescription, newProjectPeriod);
        showTheProjects(theProjects);
        // console.log(newProjectName, newProjectDescription, newProjectPeriod);
    }
}





// FUNCTION - DELETE A PROJECT
// deletes a project
window.deleteThisProject = function(thisId){
    alert("you just deleted someish!")
    deleteProject(thisId)
}




//---------------------------------------------------TASKS--------------------------------------------------//
//FUNCTION - DISPLAYING THE NEW TASK FORM
// displays the form for creating a new task (e.g when the new task button is clicked)
window.displayNewTasktForm = function (projectId) {
    let theForm = $('.task-form-container');
    theForm.css({
        'display': 'block',
    });
    // maybe do a coupla things with the projectID here
};





// FUNCTION - HANDLING A NEW TASK SUBMISSION
// collects the form info, creates a new task object, displays the new projects
window.handleNewTaskSubmission = function (event, projectId) {
    event.preventDefault();
    let newTaskName = $("#task-name").val();
    let newTaskDueDate = $("#due-date").val();

    // Check if task name is not empty
    if (!newTaskName.trim()) {
        alert("Please enter a task name!");
        return;
    }

    hideNewTaskForm();
    createTaskObject(newTaskName, newTaskDueDate, projectId);

    addTask({});
}




//FUNCTION - HIDING THE NEW TASK  FORM
// hides the form back to display none
window.hideNewTaskForm = function() {
    let theForm = $('.task-form-container');
    theForm.css({
        'display': 'none',
    });
};




// FUNCTION - DELETE A TASK
// deletes a task
window.deleteThisTask = function(thisId){
    alert("you just deleted a task or som!")
    // deleteTask(thisId)
}