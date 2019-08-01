//questions array will contain multiple objects that hold the questions and answers.
var questions = [
    {
        prompt: "Which 1980s US president survived an assassination attempt?\n(a) Jimmy Carter\n\
        (b) Ronald Reagan\n(c) George Bush",
        answer: "b"
    },
    {
        prompt: "Which 80s movie was the highest grossing film of the decade?\n(a) E.T. The Extraterrestrial\n\
        (b) Back to the Future\n(c) Star Wars",
        answer: "a"
    },
    {
        prompt: "What was the name of Kevin’s girlfriend on the television show “The Wonder Years?\n(a) Whitney\n\
        (b) Wendy\n(c) Winnie",
        answer: "c"
    },
    {
        prompt: "What hairstyle was synonymous with the 1980s?\n(a) Mullet\n\
        (b) Pixie cut\n(c) Undercut",
        answer: "a"
    },
    {
        prompt: "Who was the lead singer of the Talking Heads?\n(a) David Byrnes\n\
        (b) Robert Smith\n(c) Morrissey",
        answer: "a"
    },
    {
        prompt: "In what country was Pac-Man video game released first?\n(a) America\n\
        (b) Japan\n(c) China",
        answer: "b"
    },
    // {
    //     prompt: ""
    // }
];
// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var unanswered = 0;
var score = 0;


for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i.prompt]);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");  
    }else{
        alert("WRONG!");
    }
}
alert("you got" + score + "/" + questions.length)