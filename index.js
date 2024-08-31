function addTask(listId) {
    const taskDescription = prompt("Enter the task description:");
    if (taskDescription) {
        const list = document.getElementById(listId);
        const newTask = document.createElement("li");
        newTask.textContent = taskDescription;
        list.appendChild(newTask);
    }
}

function moveToNext(currentListId, nextListId) {
    const currentList = document.getElementById(currentListId);
    const nextList = document.getElementById(nextListId);
    if (currentList && nextList && currentList.children.length > 0) {
        const task = currentList.children[0]; 
        nextList.appendChild(task);
    }
}

function moveToPrev(currentListId, prevListId) {
    const currentList = document.getElementById(currentListId);
    const prevList = document.getElementById(prevListId);
    if (currentList && prevList && currentList.children.length > 0) {
        const task = currentList.children[0]; 
        prevList.appendChild(task);
    }
}
