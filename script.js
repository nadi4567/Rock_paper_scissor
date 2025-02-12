let computeChose = "";
let availableItem = ["rock","paper","scissor"];
let userChose = "";
let level = 0;
let computerWin = 0;
let userWin = 0;
$(".start").click(function(){
    
    $(".level_tle").text("Level " + level);
        
    
    
})

    
$(".rpsContainer").click(function(){
        console.log($(this).attr("id"))
        userChose = $(this).attr("id");
        $("#user").text("You choose " + userChose);
        let ran = Math.floor(Math.random()*3);
        console.log(ran);
        computeChose = availableItem[ran];
        console.log(computeChose);
        $("#computer").text("Computer choose " + computeChose);
        level ++;
        
        $(".level_tle").text("Level " + level);
        winnerCheck(userChose,computeChose);
        
       
});

function winnerCheck(user,computer){
        
        if(user === computer){
            console.log("Draw");
            $("#status").text("draw");
            
            console.log(userWin);
            console.log(computerWin);
        }else if(user === "rock" && computer === "paper"){
            console.log("You loose");
            $("#status").text("You loose")
            computerWin++;
            console.log(userWin);
            console.log(computerWin);
        }else if(user === "rock" && computer === "scissor"){
            console.log("You win!");
            $("#status").text("win")
            userWin++;
        }else if(user === "paper" && computer === "scissor"){
            console.log("You loose");
            $("#status").text("loose")
            computerWin++;
        }else if(user === "paper" && computer === "rock"){
            console.log("You win");
            $("#status").text("win");
            userWin++;
        }else if(user === "scissor" && computer === "rock"){
            console.log("You loose");
            $("#status").text("loose");
            computerWin++;
        }else if(user === "scissor" && computer === "paper"){
            console.log("You win");
            $("#status").text("win");
            userWin++;
        }
        console.log(userWin);
        console.log(computerWin);
        if(level == 6){
            
            $("#computer").text("");
            $("#user").text(" ");
            let resultMessage = `In 5 rounds, you won ${userWin} times and computer won ${computerWin} times.`;
            if(userWin > computerWin){
                resultMessage += "You win!";
                makeSound("./sounds/congrat.mp3");
                showCongrats(); // Call function to show the effect


            }else if(computerWin > userWin){
                resultMessage += "You lose!"
                makeSound("./sounds/wrong.mp3");
                $("body").addClass("game-over");
                setTimeout(function(){
                    $("body").removeClass("game-over");

                },400);// remove the game over
                
            }else{
                resultMessage += "That's a Draw!"
                
            }
            $("#status").text(resultMessage);
            restart();
            
        } 
    
};
function makeSound(file){
    var audio = new Audio(file);
    audio.play();
}

function restart(){
    computerWin = 0;
    userWin = 0;
    level = 0;
    started = false;
    $(".level_tle").text("Round is full, Restart again!");

};
// Function to show the congratulations effect
function showCongrats() {
    $("#congratsScreen").fadeIn(1000); // Show the overlay
    setTimeout(() => {
        $("#congratsScreen").fadeOut(); // Hide after 2 seconds
    }, 2000);
}



