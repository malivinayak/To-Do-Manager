const nameInput = document.querySelector("#name");

//local storage
const username = localStorage.getItem("username") || "";
nameInput.value = username;

//Adding name to local storage
nameInput.addEventListener("change", (e) => {
  localStorage.setItem("username", e.target.value);
});
