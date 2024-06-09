console.log("Welcome to Tic-Tac-Toe");
//Accesing boxes and other buttons
let boxes = document.querySelectorAll(".Box");
let newBtn = document.querySelector(".newGame");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector(".result");
let game = document.querySelector(".game");

let currentPlayer = "X";
// Player X, Player O
// //Winning Patterns (in 2d array)

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8])
  ) {
    // console.log(currentPlayer, "won!!!!");
    result.innerText = `${currentPlayer} won`;
    disably();
    if (currentPlayer === "O") {
      result.style.color = "maroon";
    } else if (currentPlayer === "X") {
      result.style.color = "black";
    }
  }
  if (arr.every((e) => e !== null)) {
    result.innerText = "Game Draw";
  }
}

let arr = Array(9).fill(null);

// console.log(arr);
//Adding event listener on boxes
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(element.id);

    const boxId = Number(element.id);
    arr[boxId] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer === "O") {
      element.classList.add("player2");
    }
    element.innerHTML = currentPlayer; //
    // console.log(arr);
    // console.log(element.id, " was clicked");
    element.disabled = true;
    checkWinner();
  });
});

// const bgCol = () => {
//   const boxColor = (element.style.backgroundColor = "blue");
// };
const disably = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const reset = () => {
  for (box of boxes) {
    box.disabled = false;

    box.innerText = "";
  }
  currentPlayer = "X";
  arr.fill(null);
  // console.log("New Game");
};

newBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);
