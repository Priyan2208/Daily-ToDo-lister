const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todo = document.querySelector("#todoid");
const btnclear = document.getElementById("btn-clear");
btn.addEventListener("click", function (event) {
  if (input.value === "") {
    alert("please enter some value");
  } else {
    additemFunction();
  }
});

input.addEventListener("keyup", function (e) {
  if (input.value === "") {
    alert("please enter some value");
  } else {
    if (e.code === "Enter") {
      additemFunction();
    }
  }
});

function additemFunction() {
  var para = document.createElement("p");
  para.innerText = input.value;
  para.style.margin = "16px 0px";
  var deleteicon = document.createElement("i");
  deleteicon.style.float = "right";
  deleteicon.style.marginTop = "5px";
  deleteicon.classList.add("fa", "fa-solid", "fa-trash");
  let checkicon = document.createElement("input");
  checkicon.type = "checkbox";

  checkicon.onclick = checkFunction;

  function checkFunction() {
    if (checkicon.checked == true) {
      console.log("checked");
      para.style.textDecoration = "line-through";
      para.style.textDecorationColor = "#ccc";
      para.style.color = "#ccc";
    } else {
      console.log("not checked");
      para.style.textDecoration = "none";
    }
  }
  para.prepend(checkicon);
  para.append(deleteicon);
  todo.appendChild(para);
  input.value = "";
  input.focus();
  deleteicon.addEventListener("click", function () {
    para.remove();
  });
}

btnclear.addEventListener("click", function () {
  var listitems = document.getElementById("todoid");
  listitems.innerHTML = "";
});
