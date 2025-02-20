import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard(array) {
  let numberRandom = Math.floor(Math.random() * array.length);
  return array[numberRandom]
  
}

window.onload = function () {
  //write your code here
  let numbers = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9"];
  let simbols = ["♦", "♥", "♠", "♣"];
  let numbersRandom = randomCard(numbers)
  let simbolsRandom = randomCard(simbols)
  document.getElementById("number").innerText = numbersRandom;
  document.getElementsByClassName("card-heart")[0].innerHTML = simbolsRandom
  document.getElementsByClassName("card-heart")[1].innerHTML = simbolsRandom
}

