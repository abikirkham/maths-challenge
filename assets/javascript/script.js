var correctCount = 0;
    var incorrectCount = 0;

    function generateQuestion() {
      var num1 = Math.floor(Math.random() * 10) + 1;
      var num2 = Math.floor(Math.random() * 10) + 1;
      return {
        question: num1 + " + " + num2,
        answer: num1 + num2
      };
    }

    function displayQuestion() {
      var questionObj = generateQuestion();
      var questionContainer = document.getElementById("question-container");
      questionContainer.innerHTML = "<p>" + questionObj.question + "</p>";
      return questionObj.answer;
    }

    function checkAnswer() {
      var userAnswer = document.getElementById("user-answer").value;
      var correctAnswer = displayQuestion();

      if (parseInt(userAnswer) === correctAnswer) {
        alert("Correct!");
        correctCount++;
      } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
        incorrectCount++;
      }

      updateResult();
    }

    function updateResult() {
      var resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = "Correct: " + correctCount + ", Incorrect: " + incorrectCount;
    }

    // Display the first question on page load
    displayQuestion();