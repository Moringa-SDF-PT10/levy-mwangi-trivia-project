let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const  questionElement = document.getElementById("question");
const multipleChoice = document.getElementById("multiple-choices");
const nextButton = document.getElementById("next-btn")

fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
  .then((resp) => resp.json())
  .then((data) => {
    const questions = data.results
    console.log(data.results)
   })
   .catch((error) => {
    console.error("Error fetching trivia data:", error);
  });

//   function renderQuestions(questions) {
//     const triviaContainer = document.getElementById("trivia-container");
  
//  questions.forEach((question, index) => {
//       const answers = [...question.incorrect_answers, question.correct_answer];
     // shuffleArray(answers); // Shuffle the answers for randomness
//   }
// )}

  
//       const questionHTML = `
//         <div class="question-container">
//           <h3>Q${index + 1}: ${question.question}</h3>
//           <ul class="answers">
//             ${answers
//               .map(
//                 (answer) => `
//                 <li>
//                   <label>
//                     <input type="radio" name="question-${index}" value="${answer}">
//                     ${answer}
//                   </label>
//                 </li>
//               `
//               )
//               .join("")}
//           </ul>
//         </div>
//       `;
  
//       triviaContainer.innerHTML += questionHTML;
//     });
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1))
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
   


function startQuiz(){
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Next"
  showQuestion(questions[currentQuestionIndex])
 }

function showQuestion(currentQuestion){
    resetState()
    
    questionElement.innerHTML = currentQuestion.question;

    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    shuffleArray(answers);
  
    
    const buttons = multipleChoice.querySelectorAll(".btn");
    buttons.forEach((button, index) => {
      button.style.display = "inline-block";
      button.innerHTML = answers[index]
      button.classList.remove("correct", "incorrect"); 
  
      button.addEventListener("click", () => {
        selectAnswer(button, currentQuestion.correct_answer);
      });
    });
  }
  
  function selectAnswer(selectedButton, correctAnswer, questions) {
    const isCorrect = selectedButton.innerHTML === correctAnswer;
  
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
  
    
    const buttons = multipleChoice.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.disabled = true; 
      if (button.innerHTML === correctAnswer) {
        button.classList.add("correct");
      }
    });
  
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "block";
  
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex], questions);
      } else {
        showScore();
      }
    });
  }
  
  function resetState() {
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "none";
  }

  function showScore() {
    const questionElement = document.getElementById("question");
    const multipleChoice = document.getElementById("multiple-choices");
    const nextButton = document.querySelector(".next-btn");
  
    questionElement.innerHTML = `You scored ${score} out of 10!`;
    multipleChoice.innerHTML = ""; 
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
  
    nextButton.addEventListener("click", () => {
      window.location.reload(); 
    });
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}