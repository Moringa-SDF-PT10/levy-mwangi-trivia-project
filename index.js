fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
  .then((resp) => resp.json())
  .then((data) => {
    const questions = data.results
    startTrivia(questions)
    console.log(data.results)
   })
   .catch((error) => {
    console.error("Error fetching trivia data:", error);
  });

  let currentQuestionIndex = 0;
  let score = 0;
  let incorrectQuestions = []; 
  
  function startTrivia(questions) {
    const nextButton = document.getElementById("next-btn");
    const triviaContainer = document.getElementById("trivia-container");

    renderQuestion(questions[currentQuestionIndex], currentQuestionIndex) 
    
    document.addEventListener("click", () => {
        const selectedAnswer = document.querySelector(
          `input[name="question-${currentQuestionIndex}"]:checked`
        );
    
        if (!selectedAnswer) {
          click("Please select an answer before proceeding.");
          return;
        }
    
        if (selectedAnswer.value === questions[currentQuestionIndex].correct_answer) {
          score++;
        } else {

          incorrectQuestions.push({
            question: questions[currentQuestionIndex].question,
            correctAnswer: questions[currentQuestionIndex].correct_answer,
            selectedAnswer: selectedAnswer.value,
          });
        }
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
          triviaContainer.innerHTML = ""; 
          renderQuestion(questions[currentQuestionIndex], currentQuestionIndex);
        } else {

          showResults();
        }
      });
    }
    
    function renderQuestion(question, index) {
      const triviaContainer = document.getElementById("trivia-container");
      const answers = [...question.incorrect_answers, question.correct_answer];
      
    
  
      const questionHTML = `
        <div class="question-container">
          <h3>Q${index + 1}: ${question.question}</h3>
          <ul class="answers">
            ${answers
              .map(
                (answer) => `
                <li>
                  <label>
                    <input type="radio" name="question-${index}" value="${answer}">
                    ${answer}
                  </label>
                </li>
              `
              )
              .join("")}
          </ul>
        </div>
      `;
  
      triviaContainer.innerHTML = questionHTML;
}

function showResults() {
    const triviaContainer = document.getElementById("trivia-container");
    const nextButton = document.getElementById("next-btn");
  
    let resultsHTML = `
      <div class="results-container">
        <h2>You scored ${score} out of ${currentQuestionIndex}!</h2>
    `;
  
  
    if (incorrectQuestions.length > 0) {
      resultsHTML += `
        <h3>Questions you got wrong:</h3>
        <ul>
          ${incorrectQuestions
            .map(
              (item) => `
              <li>
                <strong>Question:</strong> ${item.question}<br>
                <strong>Your Answer:</strong> ${item.selectedAnswer}<br>
                <strong>Correct Answer:</strong> ${item.correctAnswer}
              </li>
            `
            )
            .join("")}
        </ul>
      `;
    } else {
      resultsHTML += `<p>Great job! You got all the questions correct!</p>`;
    }
  
    resultsHTML += "</div>";
  
    triviaContainer.innerHTML = resultsHTML;
  
    nextButton.innerHTML = "Restart";
    nextButton.onclick = () => window.location.reload();
  }

