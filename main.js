// let submit = document.getElementById("submit");

// submit.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let name = document.getElementsById("name");

//   let password = document.getElementsById("password");

//   alert(`${name.value} ${password.value}`);
//   console.log(`${name.value} ${password.value}`);
//   name.value = "";
//   password.value = "";
// });

// function print() {
//   let x = document.getElementById("submit");
//   document.getElementById("output").innerHTML = x;
//   document.write();
// }

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#TODO input").value.length == 0) {
  } else {
    document.querySelector("#print").innerHTML +=
      document.querySelector("#TODO input").value + `<br/>`;
  }
};
var a = document.getElementById("print");
var candidate = querySelector("#TODO input");
var item = document.getElementById(REMOVE.value);
a.removeChild(item);
