const buttons = document.querySelectorAll("button");
const start = document.getElementById("start");
const order = document.getElementById("order");
const victory = document.getElementById("victory");

const initialization = () => {
  order.textContent = "";
  buttons.forEach((element) => {
    element.style.background = "white";
  });
};

const buttonColor = (buttonGreen) => {
  buttonGreen.style.background = "green";
  buttons.forEach((element) => {
    if (element !== buttonGreen) element.style.background = "red";
  });
};

const statusVictory = (newRandomID) => {
  buttonGreen = document.getElementById("button" + newRandomID);
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      element === buttonGreen
        ? (victory.innerHTML = "Vous avez Gagné !")
        : (victory.innerHTML = "Vous avez Perdu !");
      buttonColor(buttonGreen);
    });
  });
};

start.addEventListener("click", () => {
  initialization();
  newRandomID = Math.floor(Math.random() * 4 + 1);
  statusVictory(newRandomID);
});

order.textContent = "Veuillez appuyer sur START";
