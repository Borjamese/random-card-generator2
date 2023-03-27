/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["hearts", "diamonds", "spades", "clubs"];

  // de estas dos variables sacaremos un valor aleatorio de los valores y palos
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  // creamos el elemento card y añadimos las clases a traves de ClassList
  const card = document.createElement("div");
  card.classList.add("card", randomSuit);

  // Añadimos el palo a la carta
  const suitSymbol = document.createElement("div");
  suitSymbol.classList.add("card-suit");
  suitSymbol.innerHTML = getSuitSymbol(randomSuit);
  card.appendChild(suitSymbol);

  // Añadimos el valor a la carta
  const cardValue = document.createElement("div");
  cardValue.classList.add("card-value-suit", "top");
  cardValue.innerHTML = randomValue;
  card.appendChild(cardValue);

  // Hacemos que la carta se renderice
  const container = document.querySelector(".container-fluid");
  container.appendChild(card);
};

//función switch que lo que hace es renderizar la imagen dle palo en función de qué palo sea
function getSuitSymbol(suit) {
  switch (suit) {
    case "hearts":
      return "♥️";
    case "diamonds":
      return "♦️";
    case "spades":
      return "♠️";
    case "clubs":
      return "♣️";
    default:
      return "";
  }
}
