let cards = [
  "fas fa-book-dead",
  "fas fa-broom",
  "fas fa-ghost",
  "fas fa-hat-wizard",
  "fas fa-mask",
  "fas fa-skull-crossbones",
  "fas fa-spider",
  "fas fa-cloud-moon"
];

cards = cards.concat(cards);

let openedCards = [];

let gridContainer = document.querySelector(".grid-container");

function shuffle(array) {
  var currentIndex = array.length,
    temp,
    randomIndex;
  // While there are elements in the array
  while (currentIndex !== 0) {
    // Pick a random index
    randomIndex = Math.floor(Math.random() * currentIndex);
    // Decrease ctr by 1
    currentIndex--;
    // And swap the last element with it
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

const gridCreation = () => {
  let shuffledCards = shuffle(cards);
  shuffledCards.map(card => {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    let icon = document.createElement("i");
    icon.setAttribute("class", card);
    icon.classList.add("hide");
    div.appendChild(icon);
    gridContainer.appendChild(div);
  });
};

gridCreation();

let gridItem = document.querySelectorAll(".grid-item");

for (let item of gridItem) {
  item.addEventListener("click", () => {
    item.classList.add("animated", "shake");
    item.childNodes[0].classList.remove("hide");
    item.style.pointerEvents = "none";
    pushCards(item);
  });
}

let pushCards = item => {
  if (openedCards.length === 0) {
    openedCards.push(item.childNodes[0]);
  } else if (openedCards.length === 1) {
    openedCards.push(item.childNodes[0]);
    let timeout = setTimeout(matchCards, 500);
  }
};

let matchCards = () => {
  let cards = openedCards;
  console.log(cards);
  console.log(cards[0].className);
  if (cards[0].className == cards[1].className) {
    cards[0].classList.add("show");
    cards[1].classList.add("show");
    openedCards = [];
  } 
  else {
    cards[0].classList.add("hide");
    cards[1].classList.add("hide");
    cards[0].parentNode.style.pointerEvents = "";
    cards[1].parentNode.style.pointerEvents = "";
    openedCards = []; 
  }
};
