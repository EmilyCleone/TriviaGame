//declare variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


$(document).ready(function () {
//hides buttons until start button is pressed
  $(".buttonContainer0").hide();
  $(".buttonContainer1").hide();
  $(".buttonContainer2").hide();
  $(".buttonContainer3").hide();
  $(".buttonContainer4").hide();
  $(".buttonContainer5").hide();
  $("#time-left").hide();
  $("#submitButton").hide();
  $(".scoreBox").hide();


  //questions array will contain multiple objects that hold the questions and answers.
  var questions = [{
      prompt: "Which 1980s US president survived an assassination attempt?",
      choices: ["Jimmy Carter", "Ronald Reagan","George Bush"],
      answer: 1
    },
    {
      prompt: "Which 80s movie was the highest grossing film of the decade?",
      choices: ["E.T. The Extraterrestrial", "Back to the Future", "Star Wars"],
      answer: 0
    },
    {
      prompt: "What was the name of Kevin’s girlfriend on the television show The Wonder Years?",
      choices: ["Whitney", "Wendy", "Winnie"],
      answer: 2
    },
    {
      prompt: "What hairstyle was synonymous with the 1980s?",
      choices: ["Mullet", "Pixie cut", "Undercut"],
      answer: 0
    },
    {
      prompt: "Who was the lead singer of the Talking Heads?",
      choices: ["David Byrne", "Robert Smith", "Morrissey"],
      answer: 0
    },
    {
      prompt: "In what country was Pac-Man video game released first?",
      choices: ["America", "Japan", "China"],
      answer: 1
    },

  ];

//logs the value of each check button for each question. The values marked in html are set as "correct" or "incorrect"
 $('#row1 input').on('change', function() {
    console.log($('input[name=presidents]:checked', '#row1').val()); 
 });
 $('#row2 input').on('change', function() {
    console.log($('input[name=movies]:checked', '#row2').val()); 
 });
 $('#row3 input').on('change', function() {
  console.log($('input[name=wonderYears]:checked', '#row3').val()); 
});
$('#row4 input').on('change', function() {
  console.log($('input[name=hairStyle]:checked', '#row4').val()); 
});
$('#row5 input').on('change', function() {
  console.log($('input[name=talkingHeads]:checked', '#row5').val()); 
});
$('#row6 input').on('change', function() {
  console.log($('input[name=pacman]:checked', '#row6').val()); 
});



//shows buttons, questions, timer, and submit button upon pressing start, hiding the start button.
  $("#startButton").on("click", function () {
    $("#startButton").hide();
    $(".buttonContainer0").show();
    $(".buttonContainer1").show();
    $(".buttonContainer2").show();
    $(".buttonContainer3").show();
    $(".buttonContainer4").show();
    $(".buttonContainer5").show();

    document.getElementById("questionsBox0").innerHTML = questions[0].prompt;
    document.getElementById("questionsBox1").innerHTML = questions[1].prompt;
    document.getElementById("questionsBox2").innerHTML = questions[2].prompt;
    document.getElementById("questionsBox3").innerHTML = questions[3].prompt;
    document.getElementById("questionsBox4").innerHTML = questions[4].prompt;
    document.getElementById("questionsBox5").innerHTML = questions[5].prompt;

    $("#questionsBox").show();
    $("#time-left").show();
    $("#submitButton").show();
  });
  

});


var a1;
var a2;
var a3;
var a4;
var a5;
var a6;


a1=$("#ronaldReagan").val();
a2=$("#E-T").val();
a3=$("#winnie").val();
a4=$("#mullet").val();
a5=$("#davidByrne").val();
a6=$("#japan").val();

$("#submitButton").on("click", function () {
  $("#submitButton").hide();
  $("#time-left").hide();
  $("#startButton").hide();
  $("#questionsBox0").hide();
  $("#questionsBox1").hide();
  $("#questionsBox2").hide();
  $("#questionsBox3").hide();
  $("#questionsBox4").hide();
  $("#questionsBox5").hide();
  $(".buttonContainer0").hide();
  $(".buttonContainer1").hide();
  $(".buttonContainer2").hide();
  $(".buttonContainer3").hide();
  $(".buttonContainer4").hide();
  $(".buttonContainer5").hide();
  $(".scoreBox").show();
});


// function checkWinLose(){
//  for (var i=0; i<questions.length; i++)
//    if ()

// };

//countdown timer displayed on screen
var timeLeft = 120;
var elem = document.getElementById('time-left');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}
