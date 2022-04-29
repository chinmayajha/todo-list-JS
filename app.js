let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTaskElements = document.querySelector('#total-tasks');

let tasklist = []

function deleteItem(e) {
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = tasklist.indexOf(task);
    if(index != -1) tasklist.splice(index, 1);

    populateList()
}

function populateList() {
    listElement.innerHTML = '';
    tasklist.forEach(function(item){
        let newItem = document.createElement('li');

        let span  = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class = "fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e) => deleteItem(e));

        listElement.appendChild(newItem);
    });
    totalTaskElements.innerHTML = tasklist.length;
    inputElement.value = '';
}
populateList();

function addTask() {
    let s = inputElement.value.trim();
    if(s && !tasklist.includes(s)) {
        tasklist.push(s);
        populateList();
    }
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});
