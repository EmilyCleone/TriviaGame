$(document).ready(function () {

  $(".buttonContainer").hide();
  $("#time-left").hide();
  //questions array will contain multiple objects that hold the questions and answers.
  var questions = [{
      prompt: "Which 1980s US president survived an assassination attempt?",
      choices: ["Jimmy Carter", "Ronald Reagan", "George Bush"],
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
      choices: ["David Byrnes", "Robert Smith", "Morrissey"],
      answer: 0
    },
    {
      prompt: "In what country was Pac-Man video game released first?",
      choices: ["America", "Japan", "China"],
      answer: 1
    },

  ];

  function iterateThroughArray() {
    for (i = 0; i < 7; i++)
    //change to questions.length
    {
      document.getElementById("questionsBox").innerHTML = questions[i];
    }
    document.write("end of loop");
    //add number of answers correct and inccorrect
  }

  //this will show the correct and incorrect answers
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
 


  $("#startButton").on("click", function () {
    $("#startButton").hide();
    $(".buttonContainer").show();
    //$("#questionsBox").html(); //= questions.prompt;
    document.getElementById("questionsBox0").innerHTML = questions[0].prompt;
    document.getElementById("questionsBox1").innerHTML = questions[1].prompt;
    document.getElementById("questionsBox2").innerHTML = questions[2].prompt;
    document.getElementById("questionsBox3").innerHTML = questions[3].prompt;
    document.getElementById("questionsBox4").innerHTML = questions[4].prompt;
    document.getElementById("questionsBox5").innerHTML = questions[5].prompt;

    $("#questionsBox").show();
    $("#time-left").show();
  });


});


var timeLeft = 20;
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
