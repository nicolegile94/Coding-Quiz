var startBtn = document.getElementById('start');
var scoreEl = document.getElementById('score');
var questionHeader = document.querySelector('#question-header');
var questions = [
    {question: 'Which built-in method returns the calling string value converted to lower case?',
    answers: ['A: toLower()', 'B: toLowerCase()', 'C: convertLowerCase()', 'D: convertLower()'],
    correct: 1
    },
    {question: 'Inside which HTML elements do we put the Javascript?',
    answers: ['A: <script>', 'B: <js>', 'C: <java>', 'D: none of the above'],
    correct: 0
    },
    {question: 'What is the name of the web markup language?',
    answers: ['A: python', 'B: HTML', 'C: JavaScript', 'D: CSS'],
    correct: 3
    },
    {question: 'What year was JavaScript created?',
    answers: ['A: 1993', 'B: 1994', 'C: 1995', 'D: 1996'],
    correct: 2
    },
    {question: 'What is the most popular coding language in the world?',
    answers: ['A: python', 'B: HTML', 'C: JavaScript', 'D: CSS'],
    correct: 2
    }
];

function timer() {
    //initial time
    var timeLeft = 75;

    //user setInterval method
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            scoreEl.textContent = 'Score: ' + timeLeft;
            timeLeft--;
        } else {
            scoreEl.textContent = ''
            clearInterval(timeInterval);
        }
    }, 1000);
}

var startQuiz = function(event) {
    timer()
    createQuiz()    
}

var createQuiz = function() {
    var listItemEl = document.createElement("li");
    listItemEl.id = '#answer';
    questionHeader.appendChild(listItemEl);
    questionHeader.textContent = "Which built-in method returns the calling string value converted to lower case?";
}


startBtn.addEventListener("click", startQuiz);