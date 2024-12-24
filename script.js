let userScore =0
let compScore =0

const choices = document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const genCompChoice =()=>{
    const options=["rock","paper","scissor"]
    const randomIdx=Math.floor(Math.random()*3)
    return options[randomIdx]

}

const showWinner=(userwin,userchoice,compChoise)=>{
    if (userwin){
        userScore++;
        userscorepara.innerText=userScore

        
        msg.innerText=`user choise ${userchoice} beats computer choise ${compChoise}`;
        msg.style.backgroundColor="#729B79"
        }
    else{
        compScore++;
        compscorepara.innerText=compScore
        
        msg.innerText=`computer choise ${compChoise} beats user choise ${userchoice}`
        msg.style.backgroundColor="#db7f8e"
    }    
}

const playgame=(userchoice)=>{
    
    const compChoise=genCompChoice()
    

    if(userchoice==compChoise){
        
        msg.innerText="game was draw";
        msg.style.backgroundColor="#1985a1"}
    else{
        let userwin =true
        if(userchoice=="rock"){
            userwin = compChoise=="paper" ? false:true;
            }
        else if(userchoice=="paper"){
            userwin=compChoise=="scissor" ? false:true;
            }
        else {
            userwin = compChoise == "rock" ? false:true;
        }   
        showWinner(userwin,userchoice,compChoise)     
    }    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
   const userchoice =choice.getAttribute("id")
   
        playgame(userchoice)
    })
})