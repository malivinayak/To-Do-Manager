const input = document.querySelector("#new-task-input");
const alert = $("#custAlert");
const alertClose = $("#alertClose");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  /**
   * @type {string} task
   */
  const task = input.value;
  if (task.trim() == "") {
    alert.addClass("show");
    alert.removeClass("hide");
    alert.addClass("showAlert");
    setTimeout(function () {
      alert.removeClass("show");
      alert.addClass("hide");
    }, 5000);
  }
  alertClose.click(function () {
    alert.removeClass("show");
    alert.addClass("hide");
  });
});
