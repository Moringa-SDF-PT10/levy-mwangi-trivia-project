fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
  .then(resp => resp.json())
  .then(results => {
    console.log(results)
   })
   .catch((error) => {
    console.error("Error fetching trivia data:", error);
  });
   
const questionElement = document.getElementById("question")  
const multipleChoice = document.getElementById("multiple-choices") 
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0; 
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Next"
  showQuestion() 
 }

function showQuestion(){
     let currentQuestion = results[currentQuestionIndex]
     let questionNo = currentQuestionIndex + 1
     questionElement.innerHTML = questionNo + ". " + currentQuestion.question

     currentQuestion.answera.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton
     })
}