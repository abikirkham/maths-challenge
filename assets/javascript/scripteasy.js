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
  },
  {
    question: "What is 14 x 6?",
    answers: [
      { text: "84", correct: true},
      { text: "72", correct: false},
      { text: "68", correct: false},
      { text: "88", correct: false},
      
    ]
  },
  {
    question: "What is 10 + 4?",
    answers: [
      { text: "24", correct: false},
      { text: "16", correct: false},
      { text: "14", correct: true},
      { text: "18", correct: false},
      
    ]
  },
  {
    question: "What is 16 - 8?",
    answers: [
      { text: "4", correct: false},
      { text: "8", correct: true},
      { text: "6", correct: false},
      { text: "5", correct: false},
      
    ]
  },
  {
    question: "What is 9 x 2?",
    answers: [
      { text: "21", correct: false},
      { text: "11", correct: false},
      { text: "16", correct: false},
      { text: "18", correct: true},
      
    ]
  },
  {
    question: "What is 24 / 4?",
    answers: [
      { text: "6", correct: true},
      { text: "8", correct: false},
      { text: "4", correct: false},
      { text: "10", correct: false},
      
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
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Function to display a question and its answer options
function showQuestion() {
  resetState(); // Clear previous question state
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Create buttons for each answer option and attach event listeners
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}

// Function to reset the state of the quiz (clear answer buttons and hide next button)
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle the selection of an answer
function selectAnswer(event) {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Disable all buttons after an answer is selected
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block"; // Show the next button
}

// Function to display the final score at the end of the quiz
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again?";
  nextButton.style.display = "block";


}


// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz(); // If quiz is finished, restart it
  }
});

// Start the quiz when the page loads
startQuiz();
