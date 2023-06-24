let player = {
  name: "Deepak",
  chips: 150,
};
 
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let playerEl = document.getElementById("players-el");
playerEl.textContent = player.name + "  $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  //console.log(sum);
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "Congrats! you got Black jack";
    hasBlackjack = true;
    player.chips+=20;
  } else {
    message = "You lose! ";
    player.chips -= 10;
    isAlive = false;

  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + "  $" + player.chips;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let cardNew = getRandomCard();
    sum += cardNew;
    cards.push(cardNew);
    renderGame();
  }
}

function getRandomCard() {
  let cardRandom = Math.floor(Math.random() * 13 + 1);

  if (cardRandom > 10) {
    return 10;
  } else if (cardRandom === 1) {
    return 11;
  } else {
    return cardRandom;
  }
}
