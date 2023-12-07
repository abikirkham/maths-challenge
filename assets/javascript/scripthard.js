// Array containing quiz questions and their respective answers
const questions = [
  // Each question is an object with a 'question' property and an 'answers' array
  {
    question: "What is 23 x 17?",
    answers: [
      { text: "327", correct: false },
      { text: "402", correct: false },
      { text: "391", correct: true },
      { text: "361", correct: false },
    ]
  },
  // ... (more questions)
  {
    question: "What is 18 + 13?",
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
  },
  {
    question: "What is 23 x 19?",
    answers: [
      { text: "437", correct: true},
      { text: "372", correct: false},
      { text: "468", correct: false},
      { text: "488", correct: false},
      
    ]
  },
  {
    question: "What is 17 x 14?",
    answers: [
      { text: "247", correct: false},
      { text: "196", correct: false},
      { text: "238", correct: true},
      { text: "218", correct: false},
      
    ]
  },
  {
    question: "What is 49 / 7?",
    answers: [
      { text: "4", correct: false},
      { text: "7", correct: true},
      { text: "6", correct: false},
      { text: "5", correct: false},
      
    ]
  },
  {
    question: "What is 13 x 11?",
    answers: [
      { text: "121", correct: false},
      { text: "117", correct: false},
      { text: "143", correct: false},
      { text: "183", correct: true},
      
    ]
  },
  {
    question: "What is 36 / 2 / 3?",
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
