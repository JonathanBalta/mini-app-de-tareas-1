let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerText = input.value;

        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        let editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash-can";

        editBtn.append(editIcon);
        deleteBtn.append(deleteIcon);

        editBtn.addEventListener("click", function (e) {
            let pElementLocation;
            let currentTask;
            let taskUpdated;

            if (e.target.matches("button")) {
                pElementLocation = e.target.previousElementSibling;
            } else if (e.target.matches("i")) {
                pElementLocation =
                    e.target.parentElement.previousElementSibling;
            }

            currentTask = pElementLocation.innerText;
            taskUpdated = prompt("Editar tarea", currentTask);
            pElementLocation.innerText = taskUpdated
                ? taskUpdated
                : currentTask;
        });

        editBtn.style = "background-color: #35b442;";
        deleteBtn.style = "background-color: #FF4C13;";

        deleteBtn.addEventListener("click", function (e) {
            let target = e.target;

            if (target.matches("button")) {
                target.parentElement.remove();
            }
            if (target.matches("i")) {
                target.parentElement.parentElement.remove();
            }
        });

        li.append(p);
        li.append(editBtn);
        li.append(deleteBtn);

        ul.append(li);

        input.value = "";
    }
});
