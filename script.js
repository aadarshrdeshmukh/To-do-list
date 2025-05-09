const input = document.querySelector("#inpuText");
const button = document.querySelector("#Addbutton");
let taskName = "";


input.addEventListener("keyup", (e) => {
    taskName = e.target.value;
});

const taskContainer = document.querySelector("#task-container");

button.addEventListener("click", () => {
    const taskItem = document.createElement("div");

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("delete-button");


    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });

    taskItem.classList.add("task-item");
    taskItem.innerHTML = taskName;
    taskItem.append(deleteButton);
    taskContainer.append(taskItem);

    taskName = "";
    input.value = "";
});
