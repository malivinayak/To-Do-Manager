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
      if (localStorage.getItem("to-do-task") == null) {
        localStorage.setItem("to-do-task", "[]");
      }
      /**
       * @type {Array} task_list
       */
      var task_list = JSON.parse(localStorage.getItem("to-do-task"));
      task_list.push(new_task);
      localStorage.setItem("to-do-task", JSON.stringify(task_list));
      window.location.reload();
    }
  });
});
