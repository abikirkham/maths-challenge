// Logic for easy level
function startEasyLevel() {
    // Code for easy level
}

// Logic for medium level
function startMediumLevel() {
    // Code for medium level
}

// Logic for hard level
function startHardLevel() {
    // Code for hard level
}

// Call appropriate level based on user selection or default
function startGame(level) {
    if (level === 'easy') {
        startEasyLevel();
    } else if (level === 'medium') {
        startMediumLevel();
    } else if (level === 'hard') {
        startHardLevel();
    } else {
        // Default to easy level if no level is specified
        startEasyLevel();
    }
}

// Example usage: startGame('medium');

function startEasyLevel() {
    // Array containing quiz questions and their respective answers
const questions = [
    // Each question is an object with a 'question' property and an 'answers' array
    {
    question: "What is 4 x 4?",
    answers: [
        { text: "24", correct: false },
        { text: "8", correct: false },
        { text: "16", correct: true },
        { text: "18", correct: false },
    ]
    },
    // ... (more questions)
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

];
  // Get HTML elements by their IDs
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

  // Variables to keep track of the current question index and the player's score
let currentQuestionIndex = 0;
let score = 0;

  // Function to start the quiz by resetting variables and showing the first question
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    updateUI();
}

  // Function to update the UI with the current question and answer options
function updateUI() {
    resetState(); // Clear previous question state
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
    nextButton.style.display = "block"; // Show the next button
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
      startQuiz(); // If quiz is finished, restart it
    }
});

  // Start the quiz when the page loads
startQuiz();

}