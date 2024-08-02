 let userScore = 0;
 let compScore = 0;
let choices = document.querySelectorAll(".content");
 let msg = document.querySelector(".msg");
  let userScorePara = document.querySelector(".your-score");
  let compScorePara = document.querySelector(".comp-score");

 const getCompChoice = ()=>{
    let options = ["rock","paper","scissor"]
     let randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];

 }
 let drawGame = ()=>{
        console.log("Game was draw");
        msg.innerText = "Game Was Draw"
        msg.style.backgroundColor = " rgb(3, 3, 36)"
    }

  let showWinner = (userWin, userChoice, compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Won ! your ${userChoice} beats  ${compChoice}`;
            msg.style.backgroundColor = "green"
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.style.backgroundColor = "red"
            msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        }
     }

  const playGame = (userChoice) =>{
    console.log("userchoice ", userChoice);
    let compChoice = getCompChoice();
    console.log( "compChoice",compChoice);
     
    if ( userChoice === compChoice){
          // draw game 
    drawGame();
    } else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true
    } else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true
    }else{
        userWin = compChoice === "rock" ? false: true  
    } showWinner(userWin, userChoice, compChoice);
  }}

  choices.forEach((content) =>{
    content.addEventListener("click", ()=>{
        let userChoice = content.getAttribute("id");
        playGame(userChoice);      
    })
})
