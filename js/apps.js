var body = document.body
var h2El = document.createElement("h2");
var $count = document.querySelector('.count');
var count = 75;

$count.textContent = count.toString();


var timeInterval = setInterval(function(){
    count--;
    $count.textContent = count.toString();
    if (count === 0) {
        clearInterval (timeInterval)
    }
}, 1000);


// Create Ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = "Strings";
li2.textContent ="Booleans";
li3.textContent ="Alerts";
li4.textContent ="Numbers";

h2El.textContent = "Quiz Time";


body.appendChild(h2El);


// Append ordered list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

var quizQuestions = [{
    question: "Commonly used data types DO Not Include",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    correctAnswer: "c"},

{
    question: "The condition in an if/else statement is enclosed with",
    choiceA: "Quotes",
    choiceB: "Curly Brackets",
    choiceC: "Parenthesis",
    choiceD: "Square Brakcets",
    correctAnswer: "c"},

{
    question: "Arrays in JavaScript can be used to store_____",
    choiceA: "Numbers and Strings",
    choiceB: "Other Arrays",
    choiceC: "Booleans",
    choiceD: "All of the above",
    correctAnswer: "d"},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choiceA: "Commas",
    choiceB: "Curly Brackets",
    choiceC: "Quotes",
    choiceD: "Parenthesis",
    correctAnswer: "d"},
{

    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "Terminal/Bash",
    choiceC: "For Loops",
    choiceD: "Console.log",
    correctAnswer: "d"},

];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 75;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestions(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
};

