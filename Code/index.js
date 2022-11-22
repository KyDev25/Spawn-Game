const buttons = document.querySelectorAll("button");
const start = document.getElementById("start");
const order = document.getElementById("order");
const victory = document.getElementById("victory");

//Function to initialize buttons
const initialization = () => {
  order.textContent = "";
  buttons.forEach((element) => {
    element.style.background = "white";
  });
};

//Function to determine buttons color, green is the victory and red the defeat
const buttonColor = (buttonGreen) => {
  buttonGreen.style.background = "green";
  buttons.forEach((element) => {
    if (element !== buttonGreen) element.style.background = "red";
  });
};

//Function to determine if user won or lost
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

//When Start clicked, the game is on
start.addEventListener("click", () => {
  initialization();
  newRandomID = Math.floor(Math.random() * 4 + 1);
  statusVictory(newRandomID);
});

order.textContent = "Veuillez appuyer sur START";
