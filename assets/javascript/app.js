// declare variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


// function updateValues(){
// correctAnswers = $("#correctScore");
// incorrectAnswers = $("#incorrectScore");
// }

$(document).ready(function (){
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
  $(document).on('click', "correct", trivia.guessChecker);
});


  //questions array will contain multiple objects that hold the questions and answers.
  var trivia = {

    correct: 0,
    incorrect: 0,
    unanswered: 0,

    questions: {
      prompt1: "Which 1980s US president survived an assassination attempt?",
      prompt2: "Which 80s movie was the highest grossing film of the decade?",
      prompt3: "What was the name of Kevin’s girlfriend on the television show The Wonder Years?",
      prompt4: "What hairstyle was synonymous with the 1980s?",
      prompt5: "Who was the lead singer of the Talking Heads?",
      prompt6: "In what country was Pac-Man video game released first?",

      // choices: ["Jimmy Carter", "Ronald Reagan","George Bush"],
      // // answer: 1
    },
    choices: {
      prompt1: ["Jimmy Carter", "Ronald Reagan","George Bush"],
      prompt2: ["E.T. The Extraterrestrial", "Back to the Future", "Star Wars"],
      prompt3: ["Whitney", "Wendy", "Winnie"],
      prompt4: ["Mullet", "Pixie cut", "Undercut"],
      prompt5: ["David Byrne", "Robert Smith", "Morrissey"],
      prompt6: ["America", "Japan", "China"]
      // prompt: "Which 80s movie was the highest grossing film of the decade?",
      // choices: ["E.T. The Extraterrestrial", "Back to the Future", "Star Wars"],
      // answer: 0
    },
    answers:{
      prompt1: "Ronald Reagan",
      prompt2: "E.T. The Extraterrestrial",
      prompt3: "Winnie",
      prompt4: "Mullet",
      prompt5: "David Byrne",
      prompt6: "Japan"
    },

    startGame: function(){
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
    }
    // {
      // prompt: "What was the name of Kevin’s girlfriend on the television show The Wonder Years?",
      // choices: ["Whitney", "Wendy", "Winnie"],
      // // answer: 2
    // },
    // {
    //   prompt: "What hairstyle was synonymous with the 1980s?",
    //   choices: ["Mullet", "Pixie cut", "Undercut"],
    //   // answer: 0
    // },
    // {
    //   prompt: "Who was the lead singer of the Talking Heads?",
    //   choices: ["David Byrne", "Robert Smith", "Morrissey"],
    //   // answer: 0
    // },
    // {
    //   prompt: "In what country was Pac-Man video game released first?",
    //   choices: ["America", "Japan", "China"],
    //   // answer: 1
    // },

}
 
 
//logs the value of each check button for each question. The values marked in html are set as "correct" or "incorrect"
 $('#row1 input').on('change', function() {
    console.log($('input[name=presidents]:checked', '#row1').val()); 
    if ("correct" === $('input[name=presidents]:checked', '#row1').val()){
      correctAnswers++;
    //   // $("#correct").text(correctAnswers);
    }
 });

 $('#row2 input').on('change', function() {
    console.log($('input[name=movies]:checked', '#row2').val()); 
    if ("correct" === $('input[name=movies]:checked', '#row2').val()){
      correctAnswers++;
      // $("#correct").text(correctAnswers);
    }
 });
 $('#row3 input').on('change', function() {
  console.log($('input[name=wonderYears]:checked', '#row3').val()); 
  if ("correct" === $('input[name=wonderYears]:checked', '#row1').val()){
    correctAnswers++;
    // $("#correct").text(correctAnswers);
  }
});
$('#row4 input').on('change', function() {
  console.log($('input[name=hairStyle]:checked', '#row4').val()); 
  if ("correct" === $('input[name=hairStyle]:checked', '#row1').val()){
    correctAnswers++;
    // $("#correct").text(correctAnswers);
  }
});
$('#row5 input').on('change', function() {
  console.log($('input[name=talkingHeads]:checked', '#row5').val()); 
  if ("correct" === $('input[name=talkingHeads]:checked', '#row1').val()){
    correctAnswers++;
    // $("#correct").text(correctAnswers);
  }
});
$('#row6 input').on('change', function() {
  console.log($('input[name=pacman]:checked', '#row6').val()); 
  if ("correct" === $('input[name=pacman]:checked', '#row1').val()){
    correctAnswers++;
    // $("#correct").text(correctAnswers);
  }
});



// $(correctAnswers).text("#correctScore");



//shows buttons, questions, timer, and submit button upon pressing start, hiding the start button.
  $("#startButton").on("click", function () {
    $("#startButton").hide();
    $(".buttonContainer0").show();
    $(".buttonContainer1").show();
    $(".buttonContainer2").show();
    $(".buttonContainer3").show();
    $(".buttonContainer4").show();
    $(".buttonContainer5").show();

    document.getElementById("questionsBox0").innerHTML = trivia.questions.prompt1;
    document.getElementById("questionsBox1").innerHTML = trivia.questions.prompt2;
    document.getElementById("questionsBox2").innerHTML = trivia.questions.prompt3;
    document.getElementById("questionsBox3").innerHTML = trivia.questions.prompt4;
    document.getElementById("questionsBox4").innerHTML = trivia.questions.prompt5;
    document.getElementById("questionsBox5").innerHTML = trivia.questions.prompt6;

    $("#questionsBox").show();
    $("#time-left").show();
    $("#submitButton").show();
  });
  



  // guessChecker , function() {
    
  //   // timer ID for gameResult setTimeout
  //   var resultId;
    
  //   // the answer to the current question being asked
  //   var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
    
  //   // if the text of the option picked matches the answer of the current question, increment correct
  //   if($(this).text() === currentAnswer){
  //     // turn button green for correct
  //     $(this).addClass('btn-success').removeClass('btn-info');
      
  //     trivia.correct++;
  //     clearInterval(trivia.timerId);
  //     resultId = setTimeout(trivia.guessResult, 1000);
  //     $('#results').html('<h3>Correct Answer!</h3>');
  //   }
  //   // else the user picked the wrong option, increment incorrect
  //   else{
  //     // turn button clicked red for incorrect
  //     $(this).addClass('btn-danger').removeClass('btn-info');
      
  //     trivia.incorrect++;
  //     clearInterval(trivia.timerId);
  //     resultId = setTimeout(trivia.guessResult, 1000);
  //     $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
  //   }
    
  // }




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
