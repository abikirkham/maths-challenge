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
const questionElement = document.getElementById("answer-buttons");
