const myHeading = document.querySelector("h1");
myHeading.textContent = "Squidward";

let myVariable = document.querySelector(" p")
myVariable.textContent = "Legalize Nucular weapons"

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love Casting Spells!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

// return result;

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/cool-3.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("hi");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
