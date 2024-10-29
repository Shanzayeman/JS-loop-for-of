const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo1").innerHTML = text;
let language = "JavaScript";

let text1 = "";
for (let x of language) {
  text1 += x + "<br>";
}

document.getElementById("demo2").innerHTML = text1;