const inputDiv = document.querySelector("#input-btn-div");
const input = document.querySelector("#other-hobbies-input");

const other = document.querySelector("#other");
const checkboxGroup = document.querySelector(".checkbox-group");
const inputBtn = document.querySelector("#input-btn-div button");

other.addEventListener("change", function () {
  inputDiv.style.display = this.checked ? "flex" : "none";
});

inputBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  addHobby();
});
function addHobby() {
  let hobby = input.value;
  let newAlignDiv = document.createElement("div");
  newAlignDiv.setAttribute("class", "align");
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("name", "hobbies");
  newInput.setAttribute("id", hobby.toLowerCase());
  newInput.setAttribute("value", hobby);
  newInput.checked = "checked";
  newAlignDiv.append(newInput);
  let newLabel = document.createElement("label");
  newLabel.setAttribute("for", hobby.toLowerCase());
  newLabel.innerText = hobby;
  newAlignDiv.append(newLabel);
  let index = checkboxGroup.children.length - 2;
  checkboxGroup.insertBefore(newAlignDiv, checkboxGroup.children[index]);
  input.value = "";
  other.checked = false;
  other.dispatchEvent(new Event("change"));
}
