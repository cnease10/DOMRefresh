//UI variables to grab
const form = document.querySelector('#form');
const taskList = document.querySelector('.collection');
const clear = document.querySelector('.clear-task');
const input = document.querySelector('#task');

// console.log(form);
// console.log(taskList);
// console.log(clear);
// console.log(input);
//checked to make sure I was grabbing correct item

//functionality with event listeners
loadEventListeners();

function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', e => {getTasks(e)});
    //add task event
    form.addEventListener('submit', e => { addTask(e); });
    //remove task
    taskList.addEventListener('click', e => {removeTask(e); })
    //clear tasks
    clear.addEventListener('click', e => {clearTasks(e); })
}

//get tasks from local storage to present on the page
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //console.log(tasks)
    tasks.forEach(function(task) {
        //console.log(task)
        //create li element
        const li = document.createElement('li');
        //console.log(li)
        //add class
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        // create link element
        const link = document.createElement('a')
        //add class
        link.className = 'delete-item ';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove></i>'
        //append link to li
        li.appendChild(link);

        //append li to ul 
        taskList.appendChild(li);


    });
}

//addTask function takes in event
function addTask(e) {
    if (input.value == "") {
        alert('add task')
    }
    //working

     
    //create list item element
    const li = document.createElement('li');
    //add class to element
    li.className  =  "collection-item";
    //create text node to append to child
    li.appendChild(document.createTextNode(input.value));
    //create link element
    const link = document.createElement('a');
    //add class
    link.className = "delete-item "
    //add html icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);


    //store in local storage
    storeTaskInLocalStorage(input.value);

    //clear input
    input.value = "";
    //working

    

    e.preventDefault();
}
//const val = e;
//console.log(val)

//store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        //delegation
        e.target.parentElement.parentElement.remove();
        //remove from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    
}

//remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    //console.log(taskItem)
    //check local storage and put it in a variable
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //loop through tasks and check if the text content matches the
    //current task in the iteration so we can delete it

    tasks.forEach(function(task, index) {
        if(taskItem.textContent == task) {
            tasks.splice(index, 1)
        }
    })

    //set local storage after removing a task from local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear tasks

function clearTasks(e) {
    //could use this
    //taskList.innerHTML = "";

    //but this is faster and increases performance
    //https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //clear from local storage
    clearTasksFromLocalStorage();
}

//clear from local storage with .clear
function clearTasksFromLocalStorage() {
    localStorage.clear();
}


//Notes
// JSON.parse() - parses data that is received as JSON, deserializes a JSON
// string into a JS Object

// JSON.strinfigy() - creates a JSON string out of an object or Array, serializes
// a JS object into a JSON string

// example of js object to JSON
// const jsObject = {
//     name: 'Cierra',
//     over21: true,
//     hungry: "always"
// };
// const jsObjectStr = JSON.stringify(jsObject);

// console.log(jsObjectStr);
// == "{"name": "Cierra", "over21" : true, "hungry" : "always"}"

// console.log(JSON.parse(jsObjectStr));
// == {name: "Cierra", over21: true, hungry: "always"}

// DOM Info
// document object is root of every node in DOM
// document object is a property of the window object
// window object is the global top-level object 
// document consists of what is inside of the inner window
// parent node - node one level above or closer to document in DOM hierarchy
// two parent properties
// 1) parentNode
// 2) parentElement
// grandparent node?
// parentNode.parentNode
// text and comment nodes can't be parents to other nodes
// parentNode is most common when traversing the DOM

// children nodes - nodes one level below, any nodes beyond one 
// level of nesting are referred to as descendants
// child node properties
// childNodes
// firstChild
// lastChild
// children
// firstElementChild
// lastElementChild
// for...of loops can be used to iterate through all children elements
// for(let element of ul.children) {
//     element.style.background = "yellow";
// }
// can access nodes by index number or find their length property

// sibling nodes - any node on the same tree level in the DOM
// sibling node properties
// previousSibling
// nextSibling
// previousElementSibling
// nextElementSibling

// accessing elements in the DOM
// Get ID with #demo method is getElementByID()
// get class with .demo method is getElementsByClassName()
// get tag with dem method is getElementsByTagName()
// selector single querySelector()
// selector all querySelectorAll()

// https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom
