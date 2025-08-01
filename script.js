let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#reset");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Play Again!!";
    msg.style.color = "#667EEA";
};

const showWiner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}.`;
        msg.style.color = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compchoice} beats ${userchoice}.`;
        msg.style.color = "red";
    }
};

const playGame = (userchoice) =>{
    console.log("User choice =", userchoice);
    user.innerText = userchoice;
    //generate computer choice
    const compchoice = genCompChoice();
    console.log("Computer choice =", compchoice);
    comp.innerText = compchoice;

    if(userchoice === compchoice){
        //Draw game
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWiner(userwin ,userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

reset.addEventListener("click", () => {
        userscore = 0;
        compscore = 0;
        userScorePara.innerText = 0;
        compScorePara.innerText = 0;
        msg.innerText = "Play Your Move!";
        msg.style.color ="#667EEA";
        console.clear();
        user.innerText = "";
        comp.innerText = "";
});