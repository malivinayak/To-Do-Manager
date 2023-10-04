window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");

  // loadTask starts here

  const list_el = document.querySelector("#tasks");
  const taskhead = document.querySelector(".task-list");
  var task_listl = [];
  const heading = document.createElement("h2");

  if (localStorage.getItem("to-do-task") != null) {
    task_listl = JSON.parse(localStorage.getItem("to-do-task"));
    headingTask();
  }

  function headingTask() {
    heading.innerText = "Tasks";
    if (task_listl.length > 0) taskhead.prepend(heading);
  }

  task_listl.forEach((task) => {
    insertTask(task);
  });

  function insertTask(task) {
    if (task != "") {
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      task_el.appendChild(task_content_el);

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = '<i class="fas fa-edit"></i>'; // Edit icon

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete icon

      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);

      task_edit_el.addEventListener("click", (e) => {
        if (task_edit_el.querySelector("i").classList.contains("fa-edit")) {
          task_edit_el.innerHTML = '<i class="fas fa-save"></i>'; // Save icon
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();

          // Add a keydown event listener for 'Enter' key
          task_input_el.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
              task_edit_el.click();
            }
          });
        } else {
          var updated_task = task_input_el.value;
          // Check: is updated task blank
          if (updated_task.trim() == "") {
            // yes: show warning
            const input = document.querySelector("#new-task-input");
            const alert = $("#custAlert1");
            const alertClose = $("#alertClose");

            alert.addClass("show");
            alert.removeClass("hide");
            alert.addClass("showAlert");
            setTimeout(function () {
              alert.removeClass("show");
              alert.addClass("hide");
            }, 5000);
            alertClose.click(function () {
              alert.removeClass("show");
              alert.addClass("hide");
            });
          } else {
            // no: update task
            task_listl[task_listl.indexOf(task)] = updated_task;
            localStorage.setItem("to-do-task", JSON.stringify(task_listl));
            task = updated_task;

            task_edit_el.innerHTML = '<i class="fas fa-edit"></i>'; // Edit icon
            task_input_el.setAttribute("readonly", "readonly");

            // Display the success alert for editing and saving a task
            const alerte = $("#custAlert5");
            const alerteClose = $("#alertClose");
            alerte.addClass("show");
            alerte.removeClass("hide");
            alerte.addClass("showAlert");
            setTimeout(function () {
              alerte.removeClass("show");
              alerte.addClass("hide");
            }, 5000);
            alerteClose.click(function () {
              alerte.removeClass("show");
              alerte.addClass("hide");
            });
          }
        }
      });

      task_delete_el.addEventListener("click", (e) => {
        // Ask for confirmation before deleting
        const isConfirmed = confirm("Are you sure you want to delete this task?");
        if (isConfirmed) {
          task_listl.splice(task_listl.indexOf(task), 1);
          localStorage.setItem("to-do-task", JSON.stringify(task_listl));
          list_el.removeChild(task_el);
          const alert = $("#custAlert4");
          const alertClose = $("#alertClose");

          alert.addClass("show");
          alert.removeClass("hide");
          alert.addClass("showAlert");
          setTimeout(function () {
            alert.removeClass("show");
            alert.addClass("hide");
          }, 5000);
          alertClose.click(function () {
            alert.removeClass("show");
            alert.addClass("hide");
          });
          if (task_listl.length === 0) {
            taskhead.removeChild(heading);
          }
        }

      });
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /**
     * @type {string} task
     */
    let new_task = input.value;
    new_task = new_task.trim();
    console.log(new_task + " from localStore");
    if (new_task != "") {
      if (!task_listl.includes(new_task)) {
        task_listl.push(new_task);
        if (task_listl.length === 1) headingTask();
        localStorage.setItem("to-do-task", JSON.stringify(task_listl));
        input.value = "";
        insertTask(new_task);

        // task is stored alert
        const alert = $("#custAlert3");
        const alertClose = $("#alertClose");
        alert.addClass("show");
        alert.removeClass("hide");
        alert.addClass("showAlert");
        setTimeout(function () {
          alert.removeClass("show");
          alert.addClass("hide");
        }, 5000);
        alertClose.click(function () {
          alert.removeClass("show");
          alert.addClass("hide");
        });

        // list_el.load();
      } else {
        // Alert the user that the task already exists
        const alert = $("#custAlert2");
        const alertClose = $("#alertClose");
        alert.addClass("show");
        alert.removeClass("hide");
        alert.addClass("showAlert");
        setTimeout(function () {
          alert.removeClass("show");
          alert.addClass("hide");
        }, 5000);
        alertClose.click(function () {
          alert.removeClass("show");
          alert.addClass("hide");
        });
      }
    }
  });
});
