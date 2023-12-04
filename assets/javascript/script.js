// Add the JavaScript code for the math challenge game here
let operand1, operand2, correctAnswer;

function generateQuestion() {
    operand1 = Math.floor(Math.random() * 10) + 1;
    operand2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = operand1 + operand2;

    document.getElementById('operand1').innerText = operand1;
    document.getElementById('operand2').innerText = operand2;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultElement.innerText = 'Correct! Well done!';
    } else {
        resultElement.innerText = 'Incorrect. Try again!';
    }

    generateQuestion();
    document.getElementById('answer').value = '';
    setTimeout(() => {
        resultElement.innerText = '';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    generateQuestion();
});
