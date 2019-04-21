$(document).ready(function() {
    var wins = 0,
        losses = 0,
        totalScore = 0,
        minCrysRandomNumber = 1,
        maxCrysRandomNumber = 12
        minRandomNumber = 19,
        maxRandomNumber = 120
    var randomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber
    var rubyRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber
    var azuriteRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber
    var emeraldRandomNumber =  Math.floor(Math.random() * (maxCrysRandomNumber- minCrysRandomNumber + 1)) + minCrysRandomNumber
    var citrineRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber


    $("#randomNumber").text(randomNumber)
    $("#wins").append(wins) //not really needed
    $("#losses").append(losses) //not really needed
    $("#totalScore").append(totalScore) //not really needed

$("#rubyCrystal").on("click", function(){
    totalScore=totalScore+rubyRandomNumber;
    $("#totalScore").text("Your total score is: " + totalScore)
    winsLosses()

})
$("#azuriteCrystal").on("click", function(){
    totalScore=totalScore+azuriteRandomNumber;
    $("#totalScore").text("Your total score is: " + totalScore)
    winsLosses()
})

$("#emeraldCrystal").on("click", function(){
    totalScore=totalScore+emeraldRandomNumber;
    $("#totalScore").text("Your total score is: " + totalScore)
    winsLosses()
})

$("#citrineCrystal").on("click", function(){
    totalScore=totalScore+citrineRandomNumber;
    $("#totalScore").text("Your total score is: " + totalScore)
    winsLosses()
})


function winsLosses(){
if(totalScore===randomNumber){
alert("You Won! You're a Winner!");
wins++;
$("#wins").text("Wins: " + wins)
reset()
}
else if (totalScore > randomNumber){
alert("You lost. Loser...");
losses++;
$("#losses").text("Losses: " + losses);
reset()
}
}

function reset(){
    totalScore = 0;
    $("#totalScore").text("Your total score is: " + totalScore)
    randomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber
    $("#randomNumber").text(randomNumber)
    rubyRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber
    azuriteRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber
    emeraldRandomNumber =  Math.floor(Math.random() * (maxCrysRandomNumber- minCrysRandomNumber + 1)) + minCrysRandomNumber
    citrineRandomNumber = Math.floor(Math.random() * (maxCrysRandomNumber - minCrysRandomNumber + 1)) + minCrysRandomNumber 
}


});