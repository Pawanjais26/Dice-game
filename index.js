// 1st dice...
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

// 2nd dice...
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

randomNumber1 > randomNumber2
  ? (document.querySelector("h1").innerHTML = "1st Won")
  : (document.querySelector("h1").innerHTML = "2nd Won");

randomNumber1 === randomNumber2 &&
  (document.querySelector("h1").innerHTML = "Draw");

var buttton = document.getElementById("btn");
buttton.addEventListener("click", () => {
  location.reload(true);
});
