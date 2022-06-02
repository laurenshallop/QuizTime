let timerEl = document.getElementById('timer');
let textEl = document.getElementById('questions');
let test = document.getElementById('test');
let nameEl = document.getElementById('text');
let scoreSheet = document.getElementById('scores');
let initialsBtn = document.getElementById('initials');
let restart = document.getElementById('restart');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');



let gameTime;
let timeLeft = 60;
let startBtn = document.querySelector('#start');
currentIndex = 0;
let questions = [
    {
        "questionNum": 1,
        "questionText": "Commonly used data types DO Not Include",
        "answerOptions":['A. Strings()',
                         'B. Booleans()',
                         'C. Alerts()',
                         'D. Numbers()'],
        "correctAnswer": "3"
    },
    {
        "questionNum": 2,
        "questionText": "The condition in an if/else statement is enclosed with",
        "answerOptions":["A. Quotes()",
                        "B. Curly Brackets()",
                        "C. Parenthesis()",
                        "D. Square Brakcets()"],
                    "correctAnswer": "3"
    },
    {
        "questionNum": 3,
        "questionText": "Arrays in JavaScript can be used to store_____",
        "answerOptions":[ "A. Numbers and Strings()",
                            "B. Other Arrays()",
                            "C. Booleans()",
                            "D. All of the above"],
                            "correctAnswer": "4",
    },
    {
        "questionNum": 4,
        "questionText": "String values must be enclosed within _____ when being assigned to variables.",
        "answerOptions":[ "A. Commas()",
                            "B. Curly Brackets()",
                            "C. Quotes()",
                             "D. Parenthesis()"],
                             "correctAnswer": "4",
    },
    {
        "questionNum": 5,
        "questionText": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "answerOptions":["A. JavaScript()",
                            "B. Terminal/Bash()",
                            "C. For Loops()",
                            "D. Console.log"],
                            "correctAnswer": "4",
    
    }
];

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

startBtn.addEventListener('click', startQuiz);
answer1.addEventListener('click', checkAnswer);
answer2.addEventListener('click', checkAnswer);
answer3.addEventListener('click', checkAnswer);
answer4.addEventListener('click', checkAnswer);
initialsBtn.addEventListener('click',mySave);
scoreSheet.addEventListener('click',showScores);



function startQuiz () {

    gameTime = setInterval(function () {

        if(timeLeft > 0) {

            timerEl.textContent = "Time:" + timeLeft;
            timeLeft --;
        } else { clearInterval(gameTime); 
            timerEl.textContent = "End Time:"; 
            textEl.textContent = "Finsihed! Score is" + timeLeft + "!";
            answer1.style.display = "none";
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            initials.style.display = "block";
            initialsBtn.style.display = "block";
            nameEl.style.display = "block";
            restart.style.display = "block";
    }
}, 1000);
startBtn.style.display = "none";
answer1.style.display = "block";
answer2.style.display = "block";
answer3.style.display = "block";
answer4.style.display = "block";
textEl.textContent = questions[currentIndex].questionText;
answer1.textContent = questions[currentIndex].answerOptions[0];
answer2.textContent = questions[currentIndex].answerOptions[1];
answer3.textContent = questions[currentIndex].answerOptions[2];
answer4.textContent = questions[currentIndex].answerOptions[3];
};

function nextQuestion() {

    currentIndex ++;
    textEl.textContent = questions[currentIndex].questionText;
    answer1.textContent = questions[currentIndex].answerOptions[0];
    answer2.textContent = questions[currentIndex].answerOptions[1];
    answer3.textContent = questions[currentIndex].answerOptions[2];
    answer4.textContent = questions[currentIndex].answerOptions[3];

    if(currentIndex > 4) {
        timerEl.style.display ="none";
        textEl.textContent = "Done! Score is" + timeLeft + "!";
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";
        initials.style.display = "block";
        initialsBtn.style.display = "block";
        nameEl.style.display = "block";
        restart.style.display = "block";
        clearInterval(gameTime);
}

    };


function checkAnswer(e) {
    e.preventDefault();
    let userAnswer = e.target.id;
    if(userAnswer !==questions[currentIndex].correctAnswer){
        test.textContent = "";
        timeLeft -=10;
        document.getElementById('timer').innerHTML = "Time:" + timeLeft;
    }else {
        test.textContent = "correct";
    }
    nextQuestion();
}

function mySave() {
    let userName = document.getElementById('text').value;
    const lauren = {
        score: timeLeft,
        initials: userName
    };
    highScores.push(lauren);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    showScores();
};

function showScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    scoreList.innerHTML = highScores.map(lauren => {
        return `<li class="place">${lauren.initials}-${lauren.score}</li>`;
    })
    .join("");
    textEl.textContent = "Top Scores";
    text.style.display = "none";
    nameEl.style.display = "none";
    initialsBtn.style.display = "none";
    startBtn.style.display = "none";
    scoreList.style.display = "block";
    restart.style.display = "block";
};






