function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (ans) {
    if (this.getQuestionIndex().correctAnswer(ans)) {
        this.score++;
    }

    this.questionIndex++;
};