fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
  .then((resp) => resp.json())
  .then((data) => {
    const questions = data.results
    renderQuestions(questions)
    console.log(data.results)
   })
   .catch((error) => {
    console.error("Error fetching trivia data:", error);
  });

  function renderQuestions(questions) {
    const triviaContainer = document.getElementById("trivia-container");
  
 questions.forEach((question, index) => {
      const answers = [...question.incorrect_answers, question.correct_answer];
     // shuffleArray(answers); // Shuffle the answers for randomness
  
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
  
      triviaContainer.innerHTML += questionHTML;
    });
}

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1))
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
   
// const questionElement = document.getElementById("question")  
// const multipleChoice = document.getElementById("multiple-choices") 
// const nextButton = document.getElementById("next-btn")

// let currentQuestionIndex = 0; 
// let score = 0;

function startQuiz(){
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Next"
  showQuestion() 
 }

// function showQuestion(){
//      let currentQuestion = results[currentQuestionIndex]
//      let questionNo = currentQuestionIndex + 1
//      questionElement.innerHTML = questionNo + ". " + currentQuestion.question

//      currentQuestion.answer.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerHTML = answer.text
//         button.classList.add("btn")
//         answerButton
//      })
// }