window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /**
     * @type {string} task
     */
    let new_task = input.value;
    new_task = new_task.trim();
    console.log(new_task + " from localStore");
    if (new_task != "") {
    let task_list = JSON.parse(localStorage.getItem("to-do-task")) || [];
    if (!task_list.includes(new_task)) {
        task_list.push(new_task);
        localStorage.setItem("to-do-task", JSON.stringify(task_list));
        input.value = "";
        window.location.reload();
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
