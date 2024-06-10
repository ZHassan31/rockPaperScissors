$(document).ready(function () {
    let choiceArray = ["", "paper", "rock", "scissors"];
    let verdict;
    let AI;
    let randomNumber
    let playerCount=0
    let computerCount=0
    function getRandomChoice() {
        randomNumber = (Math.floor(Math.random() * 3)) + 1;
        AI = choiceArray[randomNumber];
    }
    function winner() {
        if (verdict === AI) {
            // It's a draw
        } else if ((verdict === "rock" && AI === "scissors") || 
                   (verdict === "paper" && AI === "rock") || 
                   (verdict === "scissors" && AI === "paper")) {
            // Player wins
            playerCount++;
        } else {
            // Computer wins
            computerCount++;
        }

        // Update scores
        $("#playerCount").text(`You ${playerCount}`);
        $("#computerCount").text(`Computer ${computerCount}`);

        // Check for game over
        if (playerCount >= 5 || computerCount >= 5) {
            if (playerCount === computerCount) {
                $("#winner").text("Draw");
            } else if (playerCount > computerCount) {
                $("#winner").text("You Won");
            } else {
                $("#winner").text("You Lost");
            }
            // Reset the game
            playerCount = 0;
            computerCount = 0;
        }
        else{
            $("#winner").text("");
        }
    }

    $("#paper").click(function () {
        $("#player").attr('src', '/images/paper.png')
        verdict = "paper";

    })
    $("#rock").click(function () {
        $("#player").attr('src', '/images/rock.png')
        verdict = "rock";
    })
    $("#scissors").click(function () {
        $("#player").attr('src', '/images/scissors.png')
        verdict = "scissors";

    })

    $(".choices").click(function () {
        getRandomChoice()
        $("#computer").attr(`src`, `/images/${AI}.png`)
        winner()
        console.log(playerCount, computerCount)
    })

});