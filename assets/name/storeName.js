const nameInput = document.querySelector("#name");

//local storage
const username = localStorage.getItem("username") || "";
nameInput.value = username.trim();

//Adding name to local storage
nameInput.addEventListener("change", (e) => {
  /**
   * @type {string} name
   */
  let name = e.target.value.trim();
  nameInput.value = name;
  localStorage.setItem("username", name);
});
