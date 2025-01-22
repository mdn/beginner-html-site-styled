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
    myImage.setAttribute("src", "images/j.jpg");
  } else {
    myImage.setAttribute("src", "images/");
  }
});