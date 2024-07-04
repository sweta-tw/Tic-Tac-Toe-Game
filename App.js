let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    turnO ? (box.innerText = "O") : (box.innerText = "X");
    turnO = !turnO;
    box.disabled = true;

    isWinner();
  });
});

const isWinner = () => {
  winPattern.forEach((pattern) => {
    [val1, val2, val3] = pattern;
    if (
      boxes[val1].innerText != "\u200b" &&
      boxes[val1].innerText === boxes[val2].innerText &&
      boxes[val2].innerText === boxes[val3].innerText
    ) {
      console.log(`Winner is player ${boxes[val1].innerText}`);
      showWinner(boxes[val1].innerText);
    }
  });
};

const disableBox = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "\u200b";
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is Player${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const resetGame = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
