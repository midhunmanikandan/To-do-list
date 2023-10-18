document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    let editMode = false;
    let taskToEdit = null;

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            if (editMode) {
                // If in edit mode, update the task text
                taskToEdit.querySelector("span").textContent = taskText;
                editMode = false;
                taskToEdit = null;
                addTaskButton.textContent = "Add";
            } else {
                const listItem = document.createElement("li");

                // Create a checkbox element
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";

                listItem.appendChild(checkbox); // Append the checkbox to the list item
                listItem.innerHTML += `<span>${taskText}</span>`;
                listItem.innerHTML += `<button class="editTask">Edit</button>`;
                listItem.innerHTML += `<button class="deleteTask">Delete</button>`;

                taskList.appendChild(listItem);
            }
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteTask")) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains("editTask")) {
            editMode = true;
            taskToEdit = e.target.parentElement;
            taskInput.value = taskToEdit.querySelector("span").textContent;
            addTaskButton.textContent = "Save";
        }
    });
});


