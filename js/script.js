let choice = ["stone","paper","scissor"];

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let gameStatus = document.getElementById("game-status");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

let reset = () =>{
     let showResult = `<img src="img/${choice[0]}.png" alt="" class="sign" id = "${choice[0]}" onclick="stoneFun()"/> <img src="img/${choice[1]}.png" alt="" class="sign" id = "${choice[1]}" onclick = "paperFun()"/> <img src="img/${choice[2]}.png" alt="" class="sign" id = "${choice[2]}" onclick = "scissorFun()"/>`;
        container.innerHTML = showResult;
        gameStatus.innerHTML = "";
        btn.style.visibility = "hidden";
};

let stoneFun = function (event) {
    let userChoice = stone.attributes.id.value;
        let compChoice = computerChoice();
        let result = checkWinner(userChoice,compChoice);
        result = `Computer Choice : ${compChoice} <br> Your Choice : ${userChoice}
        <br> ${result}`;
        let showResult = `<img src="img/${userChoice}.png" alt="" class="sign" / id = "${userChoice}"/> <img src="img/${compChoice}.png" alt="" class="sign" / id = "${compChoice}"/>`;
        container.innerHTML = showResult;
        gameStatus.innerHTML = result;
        btn.style.visibility = "visible";
}

let paperFun = function (event) {
    let userChoice = paper.attributes.id.value;
        let compChoice = computerChoice();
        let result = checkWinner(userChoice,compChoice);
         result = `Computer Choice : ${compChoice} <br> Your Choice : ${userChoice}
        <br> ${result}`;
        let showResult = `<img src="img/${userChoice}.png" alt="" class="sign" / id = "${userChoice}"/> <img src="img/${compChoice}.png" alt="" class="sign" / id = "${compChoice}"/>`;
        container.innerHTML = showResult;
        gameStatus.innerHTML = result;
        btn.style.visibility = "visible";
}

let scissorFun = function (event) {
    let userChoice = scissor.attributes.id.value;
        let compChoice = computerChoice();
        let result = checkWinner(userChoice,compChoice);
         result = `Computer Choice : ${compChoice} <br> Your Choice : ${userChoice}
        <br> ${result}`;
        let showResult = `<img src="img/${userChoice}.png" alt="" class="sign" / id = "${userChoice}"/> <img src="img/${compChoice}.png" alt="" class="sign" / id = "${compChoice}"/>`;
        container.innerHTML = showResult;
        gameStatus.innerHTML = result;
        btn.style.visibility = "visible";
}


let randomChoice = () => {
    return Math.floor(Math.random() * 3)
};

let computerChoice = () => {
    compsign = "";
    compsign = choice[randomChoice()];
    return compsign;
};

let checkWinner = (userChoice,compChoice) => {
    if (userChoice === "stone") {
        if(compChoice === "scissor") {
            return "You Won!";
        } else if(compChoice === "paper") {
            return "You Lost!";
        } else {
            return "Draw!";
        }
    } else if (userChoice === "paper") {
        if(compChoice === "scissor") {
            return "You Lost!";
        } else if(compChoice === "paper") {
            return "Draw!";
        } else {
            return "You Won!";
        }
    } else {
        if(compChoice === "scissor") {
            return "Draw!";
        } else if(compChoice === "paper") {
            return "You Won!";
        } else {
            return "You Lost!";
        }
    }
};