// populate questions on quiz
function populate() {
    if (quiz.isEnded()) {
        showScores(); 
    } else {
        // show question; Not written
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++){
            let element = document.getElementById(`choice${i}`);
            element.innerHTML = choices[i];
            guess(`btn${i}`, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById('progress');
    element.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScores() {
    let gameOverHtml = `
        <h1>Result</h1>
        <h2 id="score"> Your Scores: ${quiz.score}</h2>
    `;

    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

const question = [
    new Question("Question 1?", ["op1", "op2", "op3", "op4"], "op1"),
    new Question("Question 2?", ["op1", "op2", "op3", "op4"], "op4"),
    new Question("Question 3?", ["op1", "op2", "op3", "op4"], "op3"),
    new Question("Question 4?", ["op1", "op2", "op3", "op4"], "op5"),
    new Question("Question 5?", ["op1", "op2", "op3", "op4"], "op2"),
];


let quiz = new Quiz(question);

populate();