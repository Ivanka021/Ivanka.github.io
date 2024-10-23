var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/R.jpg") {
    myImage.setAttribute("src", "images/R1.jpg");
  } else {
    myImage.setAttribute("src", "images/R.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Шиншила - твій друг, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Шиншила - твій друг, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};