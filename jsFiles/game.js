let boxes = document.querySelectorAll(".box");
let gameContainer=document.querySelector(".gameContainer")
let resetBtn = document.querySelector("#resetBtn");
let message = document.querySelector(".message");

let winning_pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let player1Turn = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1Turn == true) {
      box.style.backgroundImage = "url('/TicTacToe/assets/cross.png')";
      player1Turn = false;
    } else if (player1Turn == false) {
      box.style.backgroundImage = "url('/TicTacToe/assets/circle.png')";
      player1Turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
 
const disableboxes = ()=>{
    
}

const checkWinner = () => {
  for (let pattern of winning_pattern) {
    position1 = boxes[pattern[0]].style.backgroundImage;
    position2 = boxes[pattern[1]].style.backgroundImage;
    position3 = boxes[pattern[2]].style.backgroundImage;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {
        message.style.visibility = "visible";

        if (position1.includes("cross")) {
          console.log("cross");
          message.innerText = "Congratulations, Winner is Cross";
          message.classList.add("swing");
        }
        
        else if (position1.includes("circle")) {
          console.log("circle");
          message.style.visibility = "visible";
          message.innerText = "Congratulations, Winner is Circle";
          message.classList.add("swing");
        }
      }
    }
  }
  
};

const resetGame=()=>{
    player1Turn=true;
}
