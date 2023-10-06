const input = document.querySelector("#new-task-input");
const form = document.querySelector("#new-task-form");
const alert = $("#custAlert");
const alertClose = $("#alertClose");

// Close alert when close button is clicked
$(".close-button").click(function () {
  $(this).parent().removeClass("show");
  $(this).parent().addClass("hide");
});

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
    input.value = "";
  }
});
