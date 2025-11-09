const input = document.querySelector("#input-btn-div");
const other = document.querySelector("#other");
const checkboxGroup = document.querySelector(".checkbox-group");
other.addEventListener("change", function () {
  input.style.display = this.checked ? "flex" : "none";
});

function addHobby() {
  let hobby = input.value;
  console.log(hobby);
}
