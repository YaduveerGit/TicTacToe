
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;  //player X , playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];  




boxes.forEach((box) => {
    box.addEventListener("click", () => {
      //  console.log("box was clicked");
      //  box.innerText = "radha";
        if(turnO){ // playerO
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled =true;
        checkWinner();
    });
    
});






const checkWinner = () => {
    for(let pattern of winPatterns){
        
      //  console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pos1Val);
        // console.log(pos2Val);
        // console.log(pos3Val);

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){     // ..To check the value of the boxse are these value are aame or not
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("winner",pos1Val);
                showWinner(pos1Val);

            }
        }
    }
}

const showWinner = (winner) => {  //....To show the winner 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

    
};

const disabledBoxes = () => {   ////After winning the game all remaining button becomes disabled 
    for(let box of boxes){
        box.disabled = true;
    }
}

//............For Reset Button OR New Button to restart the game after pressing the reset button OR  New Button ...................


const resetGame = () => {
    turnO = true;     //....afetr pressing the reset button the turn value of 0 becomes enabled or ture
    enabledBoxes();
    msgContainer.classList.add("hide"); // hide the msg container again to restart the game
};

// ..1st Enabled all the button afetr pressing the reset button 
const enabledBoxes = () => {    
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//.........Upper 2 functions will be enable when we click new button or reset button so we add this reset function to reset game or new game 

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


