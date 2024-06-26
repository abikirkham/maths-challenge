document.addEventListener('DOMContentLoaded', function () {
// Establish game levels
const quizData = {
    easy: [
        {
            question: "What is 4 x 4?",
            answers: [
                { text: "24", correct: false },
                { text: "8", correct: false },
                { text: "16", correct: true },
                { text: "18", correct: false },
            ]
            },
            {
            question: "What is 2 + 3?",
            answers: [
                { text: "4", correct: false},
                { text: "5", correct: true},
                { text: "6", correct: false},
                { text: "9", correct: false},
                
            ]
            },
            {
            question: "What is 8 x 4?",
            answers: [
                { text: "24", correct: false},
                { text: "36", correct: false},
                { text: "32", correct: true},
                { text: "40", correct: false},
                
            ]
            },
            {
            question: "What is 15 - 7?",
            answers: [
                { text: "8", correct: true},
                { text: "6", correct: false},
                { text: "9", correct: false},
                { text: "7", correct: false},
                
            ]
            },
            {
            question: "What is 12 / 3?",
            answers: [
                { text: "14", correct: false},
                { text: "5", correct: false},
                { text: "3", correct: false},
                { text: "4", correct: true},
                
            ]
            },
            {
            question: "What is 5 x (2 + 3)?",
            answers: [
                { text: "24", correct: false},
                { text: "18", correct: false},
                { text: "25", correct: true},
                { text: "30", correct: false},
                
            ]
            },
            {
            question: "What is 18 - 9?",
            answers: [
                { text: "9", correct: true},
                { text: "8", correct: false},
                { text: "11", correct: false},
                { text: "6", correct: false},
                
            ]
            },
            {
            question: "What is 9 + 6?",
            answers: [
                { text: "13", correct: false},
                { text: "15", correct: true},
                { text: "16", correct: false},
                { text: "17", correct: false},
                
            ]
            },
            {
            question: "What is 3 x 7?",
            answers: [
                { text: "24", correct: false},
                { text: "21", correct: true},
                { text: "27", correct: false},
                { text: "18", correct: false},
                
            ]
            },
            {
            question: "What is 20 / 5?",
            answers: [
                { text: "2", correct: false},
                { text: "4", correct: true},
                { text: "6", correct: false},
                { text: "15", correct: false},
                
            ]
            }
        
        ],

    medium: [
        {
            question: "What is 7 x 8?",
            answers: [
                { text: "45", correct: false },
                { text: "58", correct: false },
                { text: "56", correct: true },
                { text: "48", correct: false },
            ]
            },
            {
            question: "What is 12 x 5?",
            answers: [
                { text: "74", correct: false},
                { text: "60", correct: true},
                { text: "50", correct: false},
                { text: "59", correct: false},
                
            ]
            },
            {
            question: "What is 9 x 3?",
            answers: [
                { text: "24", correct: false},
                { text: "36", correct: false},
                { text: "27", correct: true},
                { text: "40", correct: false},
                
            ]
            },
            {
            question: "What is 6 x 7?",
            answers: [
                { text: "36", correct: true},
                { text: "32", correct: false},
                { text: "54", correct: false},
                { text: "48", correct: false},
                
            ]
            },
            {
            question: "What is 11 x 13?",
            answers: [
                { text: "142", correct: false},
                { text: "150", correct: false},
                { text: "123", correct: false},
                { text: "143", correct: true},
                
            ]
            },
            {
            question: "What 36 / 6?",
            answers: [
                { text: "4", correct: false},
                { text: "8", correct: false},
                { text: "6", correct: true},
                { text: "3", correct: false},
                
            ]
            },
            {
            question: "What is 45 / 9?",
            answers: [
                { text: "5", correct: true},
                { text: "8", correct: false},
                { text: "9", correct: false},
                { text: "6", correct: false},
                
            ]
            },
            {
            question: "What is 64 / 8?",
            answers: [
                { text: "12", correct: false},
                { text: "8", correct: true},
                { text: "9", correct: false},
                { text: "7", correct: false},
                
            ]
            },
            {
            question: "What is 153 x 9?",
            answers: [
                { text: "24", correct: false},
                { text: "17", correct: true},
                { text: "27", correct: false},
                { text: "18", correct: false},
                
            ]
            },
            {
            question: "What is 155 / 5?",
            answers: [
                { text: "25", correct: false},
                { text: "31", correct: true},
                { text: "26", correct: false},
                { text: "15", correct: false},
                
            ]
            }
    ],

    hard: [
        {
            question: "What is 23 x 17?",
            answers: [
                { text: "327", correct: false },
                { text: "402", correct: false },
                { text: "391", correct: true },
                { text: "361", correct: false },
            ]
            },
            {
            question: "What is 18 x 13?",
            answers: [
                { text: "349", correct: false},
                { text: "234", correct: true},
                { text: "267", correct: false},
                { text: "379", correct: false},
                
            ]
            },
            {
            question: "What is 27 x 14?",
            answers: [
                { text: "240", correct: false},
                { text: "364", correct: false},
                { text: "378", correct: true},
                { text: "402", correct: false},
                
            ]
            },
            {
            question: "What is 32 x 16?",
            answers: [
                { text: "618", correct: true},
                { text: "596", correct: false},
                { text: "512", correct: false},
                { text: "647", correct: false},
                
            ]
            },
            {
            question: "What is 9 x 6 x 4?",
            answers: [
                { text: "196", correct: false},
                { text: "253", correct: false},
                { text: "301", correct: false},
                { text: "216", correct: true},
                
            ]
            },
            {
            question: "What is 64 / 8?",
            answers: [
                { text: "6", correct: false},
                { text: "12", correct: false},
                { text: "8", correct: true},
                { text: "9", correct: false},
                
            ]
            },
            {
            question: "What is 135 / 9?",
            answers: [
                { text: "15", correct: true},
                { text: "12", correct: false},
                { text: "18", correct: false},
                { text: "20", correct: false},
                
            ]
            },
            {
            question: "What is 98 / 7?",
            answers: [
                { text: "13", correct: false},
                { text: "14", correct: true},
                { text: "16", correct: false},
                { text: "17", correct: false},
                
            ]
            },
            {
            question: "What is 75 / 5 / 3?",
            answers: [
                { text: "4", correct: false},
                { text: "5", correct: true},
                { text: "7", correct: false},
                { text: "8", correct: false},
                
            ]
            },
            {
            question: "What is 144 / 12?",
            answers: [
                { text: "13", correct: false},
                { text: "12", correct: true},
                { text: "16", correct: false},
                { text: "15", correct: false},
                
            ]
            }
        
    ]
};



// Function to start a quiz for a given level
// Get HTML elements by their IDs
function startQuiz(level) {
    const questions = quizData[level];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

// Variables to keep track of the current question index and the player's score
    let currentQuestionIndex = 0;
    let score = 0;

// Function to start the quiz by resetting variables and showing the first question
    function startQuizInternal() {
        currentQuestionIndex = 0;
        score = 0;
        updateUI();
    }

// Function to update the UI with the current question and answer options
    function updateUI() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        const questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  // Create buttons for each answer option and attach event listeners
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", handleAnswerSelection);
        });
    }

// Function to reset the state of the quiz (clear answer buttons and hide next button)
    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

// Function to handle the selection of an answer
    function handleAnswerSelection(event) {
        const selectedBtn = event.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        disableAnswerButtons();
        nextButton.style.display = "block";
    }

// Function to disable all answer buttons after an answer is selected
    function disableAnswerButtons() {
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
    }

// Function to handle the next button click
    function handleNextButtonClick() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            updateUI();
        } else {
            showScore();
        }
    }

// Function to display the final score at the end of the quiz
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again?";
        nextButton.style.display = "block";
    }

// Event listener for the next button
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButtonClick();
        } else {
            startQuizInternal();
        }
    });

    startQuizInternal();
}

// Function to hide other levels when a level is selected
const levelButtons = document.querySelectorAll('.level-buttons');

levelButtons.forEach(button => {
    const level = button.innerHTML;
    
    if (level === 'easy') {
    } else if (level === 'medium') {
    } else if (level === 'hard') {
    }

    button.addEventListener("click", event => {
        levelButtons.forEach(levelButton => {
            if (levelButton !== button) {
                const sectionId = levelButton.innerHTML.toLowerCase();
                const section = document.getElementById(sectionId);
                section.style.display = section.style.display === "none" ? "block" : "none";
            }
        });
    });
});


// Call appropriate level based on user selection or default
function startGame(level) {
    if (level === 'easy' || level === 'medium' || level === 'hard') {
        // hideOtherLevels(level); // Hide other levels when a level is selected
        startQuiz(level);
    } else {
        // Default to easy level if no level is specified
        // hideOtherLevels('easy'); // Hide other levels when defaulting to easy level
        startQuiz('easy');
    }
}

// Attach event listeners to start quiz buttons
document.getElementById('easyButton').addEventListener('click', function() {
    startGame('easy');
});

document.getElementById("mediumButton").addEventListener("click", function () {
    startGame("medium");
});

document.getElementById("hardButton").addEventListener("click", function () {
    startGame("hard");
});
});