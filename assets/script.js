var timerEl = document.getElementById("timer");
timerEl.innerHTML = "Time:" + 0;
var counter = 0;
var highscores = 0;

//quiz questions
var quiz1 = document.getElementById("question1");
var quiz2 = document.getElementById("question2");
var quiz3 = document.getElementById("question3");
var quiz4 = document.getElementById("question4");
var quiz5 = document.getElementById("question5");


//correct answer
var correctAnswer = document.getElementsByClassName("correct")

//wrong answer
var wrongAnswer = document.getElementsByClassName("wrong")

//start button
var startButton = document.getElementById("start");

//introduction page
var mainPage = document.getElementById("intro");
timerEl.style.display = "Block";
quiz1.style.display = "none";
quiz2.style.display = "none";
quiz3.style.display = "none";
quiz4.style.display = "none";
quiz5.style.display = "none";

var cur_question = 1
var num_questions = 6

startButton.addEventListener("click", function () {
    startTimer();
    mainPage.style.display = "none";
    timerEl.style.display = "block";

    for (i = 1; i <= num_questions; i++) {
        element_name = "question" + i;
        console.log(element_name);
        quiz = document.getElementById(element_name);

        //correct answer/wrong answer functions
        quiz.addEventListener("click", function (event) {
            if (event.target.className === "correct") {
                alert("YOU NAILED IT")
                moveToNext();
            }
            // increment score and go to next question
            else if (event.target.className === "wrong") {
                alert("NAHHH")
                moveToNext();
                //decrement time by 10 seconds and go to next question
                //if time out, end quiz and display score
            }
        });


        quiz.style.display = "none";
    }

    quiz1.style.display = "block";

    // quiz1.style.display = "block";
    // quiz2.style.display = "none";
    // quiz3.style.display = "none";
    // quiz4.style.display = "none";
    // quiz5.style.display = "none";

});


function moveToNext() {
    for (i = 1; i <= num_questions; i++) {
        element_name = "question" + i;

        quiz = document.getElementById(element_name);
        if (i == cur_question)
            quiz.style.display = "block"
        else
            quiz.style.display = "none"

    }
    console.log(cur_question);

    if (cur_question < num_questions) {
        cur_question++;
    }
}

//correct answer/wrong answer functions
quiz1.addEventListener("click", function (event) {
    if (event.target.className === "correct") {
        window.console.log("YOU NAILED IT")
        moveToNext();
    }
    // increment score and go to next question
    else if (event.target.className === "wrong") {
        alert("NAHHH")
        // decrement time by 10 seconds and go to next question
        //if time out, end quiz and display score
    }
});

//timer functions
function startTimer() {
    timerEl.innerHTML = "Time:" + 60
    var timedOut = setInterval(function () {
        timerEl.innerHTML = "Time:" + (60 - counter)
        counter++;
        if (counter >= 60) {
            clearInterval(timedOut);
            alert("time out")
        }
    }, 1000)
}


/*var quizData = [
    {
        questions: "What color is the sky?",
        answers: [
            { label: "Blue", correct: true },
            { label: "orange", correct: false },
            { label: "purple", correct: false }
        ]
    },
    {
        questions: "What color is the sky?",
        answers: [
            { label: "Blue", correct: true },
            { label: "orange", correct: false },
            { label: "purple", correct: false }
        ]
    },
    {
        questions: "What color is the sky?",
        answers: [
            { label: "Blue", correct: true },
            { label: "orange", correct: false },
            { label: "purple", correct: false }
        ]
    },
]

var questionCounter = 0
// load question quizData[questionCounter]
// answer question
// increment counter and load next question

var el = document.createElement()*/