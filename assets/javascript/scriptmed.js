// Array containing quiz questions and their respective answers
const questions = [
  // Each question is an object with a 'question' property and an 'answers' array
  {
    question: "What is 7 x 8?",
    answers: [
      { text: "45", correct: false },
      { text: "58", correct: false },
      { text: "56", correct: true },
      { text: "48", correct: false },
    ]
  },
  // ... (more questions)
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
  },
  {
    question: "What is 140 x 5?",
    answers: [
      { text: "700", correct: true},
      { text: "685", correct: false},
      { text: "755", correct: false},
      { text: "820", correct: false},
      
    ]
  },
  {
    question: "What is 10 x 4 / 5?",
    answers: [
      { text: "4", correct: false},
      { text: "6", correct: false},
      { text: "5", correct: true},
      { text: "8", correct: false},
      
    ]
  },
  {
    question: "What is 160 / 8?",
    answers: [
      { text: "34", correct: false},
      { text: "20", correct: true},
      { text: "26", correct: false},
      { text: "15", correct: false},
      
    ]
  },
  {
    question: "What is 98 x 2?",
    answers: [
      { text: "42", correct: false},
      { text: "38", correct: false},
      { text: "62", correct: false},
      { text: "49", correct: true},
      
    ]
  },
  {
    question: "What is 24 x 40?",
    answers: [
      { text: "960", correct: true},
      { text: "873", correct: false},
      { text: "982", correct: false},
      { text: "880", correct: false},
      
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

  // Display comment based on the score
  displayComment();
}

// Function to display a comment based on the score
function displayComment() {
  let comment = "";
  if (score >= 0 && score <= 5) {
    comment = "Loser... joking - keep trying!";
  } else if (score >= 6 && score <= 10) {
    comment = "Almost there!!";
  } else if (score >= 11 && score <= 15) {
    comment = "Nerd!!! But well done!";
  }


// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
    displayComment();
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
