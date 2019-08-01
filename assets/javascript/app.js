var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;


function updateValues(){
    document.getElementById("wins").innerHTML = numberOfWins;
    document.getElementById("losses").innerHTML = numberOfLosses;
    document.getElementById("totalScore").innerHTML = totalScore;
}