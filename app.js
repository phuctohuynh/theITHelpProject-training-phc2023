let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    }
    return "Scissors";
}

function printMessage(user, comp, verb, res) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} ${verb} ${convertToWord(comp)}${smallCompWord}. ${res}`;
}

function win(user, comp) {
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    printMessage(user, comp, "beats", "You win!");
    user_div.classList.add("green-glow");
    setTimeout(() => {
        user_div.classList.remove("green-glow");
    }, 300);
}

function lose(user, comp) {
    const user_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    printMessage(user, comp, "loses to", "You lost...");
    user_div.classList.add("red-glow");
    setTimeout(() => {
        user_div.classList.remove("red-glow");
    }, 300);
}

function draw(user, comp) {
    const user_div = document.getElementById(user);
    printMessage(user, comp, "equals to", "It's a draw!");
    user_div.classList.add("gray-glow");
    setTimeout(() => {
        user_div.classList.remove("gray-glow");
    }, 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();