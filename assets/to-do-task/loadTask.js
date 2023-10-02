// const form = document.querySelector("#new-task-form");
// const list_el = document.querySelector("#tasks");

// if (localStorage.getItem("to-do-task") != null) {
//   var task_list = JSON.parse(localStorage.getItem("to-do-task"));
//   const heading = document.createElement("h2");
//   heading.innerText = "Tasks";
//   if (task_list.length > 0) list_el.appendChild(heading);
//   task_list.forEach((task) => {
//     if (task != "") {
//       const task_el = document.createElement("div");
//       task_el.classList.add("task");

//       const task_content_el = document.createElement("div");
//       task_content_el.classList.add("content");

//       task_el.appendChild(task_content_el);

//       const task_input_el = document.createElement("input");
//       task_input_el.classList.add("text");
//       task_input_el.type = "text";
//       task_input_el.value = task;
//       task_input_el.setAttribute("readonly", "readonly");

//       task_content_el.appendChild(task_input_el);

//       const task_actions_el = document.createElement("div");
//       task_actions_el.classList.add("actions");

//       const task_edit_el = document.createElement("button");
//       task_edit_el.classList.add("edit");
//       task_edit_el.innerText = "Edit";

//       const task_delete_el = document.createElement("button");
//       task_delete_el.classList.add("delete");
//       task_delete_el.innerText = "Delete";

//       task_actions_el.appendChild(task_edit_el);
//       task_actions_el.appendChild(task_delete_el);

//       task_el.appendChild(task_actions_el);

//       list_el.appendChild(task_el);

//       task_edit_el.addEventListener("click", (e) => {
//         if (task_edit_el.innerText.toLowerCase() == "edit") {
//           task_edit_el.innerText = "Save";
//           task_input_el.removeAttribute("readonly");
//           task_input_el.focus();
//         } else {
//           var updated_task = task_input_el.value;
//           //Check: is updated task blank
//           if (updated_task.trim() == "") {
//             // yes: show warning
//             const input = document.querySelector("#new-task-input");
//             const alert = $("#custAlert1");
//             const alertClose = $("#alertClose");

//             alert.addClass("show");
//             alert.removeClass("hide");
//             alert.addClass("showAlert");
//             setTimeout(function () {
//               alert.removeClass("show");
//               alert.addClass("hide");
//             }, 5000);
//             alertClose.click(function () {
//               alert.removeClass("show");
//               alert.addClass("hide");
//             });
//           } else {
//             //no: update task
//             task_list[task_list.indexOf(task)] = updated_task;
//             localStorage.setItem("to-do-task", JSON.stringify(task_list));
//             task = updated_task;

//             task_edit_el.innerText = "Edit";
//             task_input_el.setAttribute("readonly", "readonly");
//           }
//         }
//       });

//       task_delete_el.addEventListener("click", (e) => {
//         task_list.splice(task_list.indexOf(task), 1);
//         localStorage.setItem("to-do-task", JSON.stringify(task_list));
//         list_el.removeChild(task_el);
//         if(task_list.length==0){
//           list_el.removeChild(heading);
//         }
//       });
//     }
//   });
// }
