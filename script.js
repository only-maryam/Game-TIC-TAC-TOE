let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// winning pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
// player X plays first
let xTurn = true;
let count = 0;

// disabled all Button
const disableButtons = () => {
    btnRef.forEach((element) => {
        element.disabled = true;
    });
    // enable popup

    popupRef.classList.remove("hide");
};
// disabled all Button
const enableButtons = () => {
    btnRef.forEach((element) => {
        enableButtons.innerText="";
        element.disabled = false;
    });
    // enable popup

    popupRef.classList.add("hide");
};

// this function is executed when the player win.
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

// // Function for draw 
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br>It's a Draw";
}
// New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})
const restartGame = () => {
    // Reset game state variables
    xTurn = true;
    count = 0;
  
    // Clear button text and enable buttons
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
  
    // Hide the popup
    popupRef.classList.add("hide");
  };
  
  // Attach the restartGame function to the "Restart" button
  restartBtn.addEventListener("click", restartGame);
  

// win logic
const winChecker = () => {

    // loop though all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        // click if element are filled
        // 3 empty element are same and would give wins as would 

        if (element1 != "" && (element2 != "") && (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                // if all 3 button  has same value  then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
};

// display x on click 
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;

            // display X; 
            element.innerText = "X"
            element.disabled = true;
        } else {
            xTurn = true;
            // display O;

            element.innerText = "O";
            element.disabled = true;
        }
        // increment count and each click 

        count += 1;
        if (count === 9) {
            drawFunction();
        }

        // check for win in every click
        winChecker();
    });
});
// Enable  buttons  and disabled popup load 
window.onload = enableButtons;