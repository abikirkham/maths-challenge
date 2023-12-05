const questions = [
  {
    question: "What is 4 x 4?",
    answers: [
      { text: "24", correct: false},
      { text: "8", correct: false},
      { text: "16", correct: true},
      { text: "18", correct: false},
      
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
      { text: "11", correct: true},
      { text: "8", correct: false},
      { text: "9", correct: false},
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
      { text: "16", correct: true},
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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion. question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < question.length){
  showQuestion();
}else{
  showScore();
}
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();