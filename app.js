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
    //add task event
    form.addEventListener('submit', e => { addTask(e); });
 
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
    link.className = "delete-item"
    //add html icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input
    //input.value = "";
    //working

    e.preventDefault();
}
//const val = e;
//console.log(val)
//getting ref error e is not defined --- has something to do with function setup for event listener
//

