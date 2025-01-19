let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const uScore =document.querySelector("#user-score");
const cScore =document.querySelector("#comp-score");
const msg =document.querySelector("#msg");

const genCompChoice =()=>{
    const options =["rock","paper","scissor"];
    const rndIdx = Math.floor(Math.random()*3);
    return options[rndIdx];
}

const drawGame=()=>{
    msg.innerText=`Computer also choose ${genCompChoice()}, Game was draw`;
    
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore; 
        msg.innerText=`Computer choose ${genCompChoice()}, You Win`;

    }
    else{
        compScore++;
        cScore.innerText =compScore;
        msg.innerText=`Computer choose ${genCompChoice()}, You lose`;

    }
}


const playGame =(userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin=compChoice === "paper"?false:true;        
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }


}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})