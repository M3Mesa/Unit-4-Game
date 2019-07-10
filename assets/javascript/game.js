// variable designations
$(document).ready(function () {

    var score = 0;
    var wins = 0;
    var losses = 0;
    
    // random generated variables
    var targetScore = Math.floor(Math.random() * 120 + 19);
    var Diamond = Math.floor(Math.random() * 12 + 1);
    var Esmerald = Math.floor(Math.random() * 12 + 1);
    var Ruby = Math.floor(Math.random() * 12 + 1);
    var Citrine = Math.floor(Math.random() * 12 + 1);

    $("#randomNumber").text("Target Score: " + targetScore);
    $("#score").text("Score: " + score);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    // onClick functions
    $("#clickDiamond").on("click", function () {
        score = score + Diamond;
        console.log("Score: " + score);
        $("#score").text("Score " + score);
        checkIfWin();
    });
    
    $("#clickEsmerald").on("click", function () {
        score = score + Esmerald;
        console.log("Score: " + score);
        $("#score").text("Score " + score);
        checkIfWin();
    });

    $("#clickRuby").on("click", function () {
        score = score + Ruby;
        console.log("Score: " + score);
        $("#score").text("Score " + score);
        checkIfWin();
    });
    
    $("#clickCitrine").on("click", function () {
        score = score + Citrine;
        console.log("Score: " + score);
        $("#score").text("Score: " + score);
        checkIfWin();
    });

    $("#randomButton").on("click", function () {
        console.log("Reset game");
        $("#randomNumber").text("Target Score: " + targetScore);
        resetGame();
    });

    // check if win function
    function checkIfWin() {

        if (score === targetScore) {
            wins++;
            $("#wins").text("Wins: " + wins);
            resetGame();
        } else if (score > targetScore) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
    }

    // reset function
    function resetGame() {
        targetScore = Math.floor(Math.random() * 120 + 19);
        Diamond = Math.floor(Math.random() * 12 + 1);
        Esmerald = Math.floor(Math.random() * 12 + 1);
        Ruby = Math.floor(Math.random() * 12 + 1);
        Citrine = Math.floor(Math.random() * 12 + 1);

        var score = 0;

        $("#randomNumber").text(targetScore);
        $("#score").text(score);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }

});
