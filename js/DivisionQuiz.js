// Function to generate random addition questions
let questionAnswers = []

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const num2 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const answer = num1 / num2;
    const finalanswer = answer.toFixed(2)
    questionAnswers.push(finalanswer)
    return { question: `${num1} divided by ${num2}`, answer: finalanswer };
}


// Function to generate the quiz
function speakText(text) {
  const speechSynthesis = window.speechSynthesis;
  const speechUtterance = new SpeechSynthesisUtterance();
  speechUtterance.text = text;
  speechSynthesis.speak(speechUtterance);
}

// Function to generate the quiz
function speakText(text) {
  const speechSynthesis = window.speechSynthesis;
  const speechUtterance = new SpeechSynthesisUtterance();
  speechUtterance.text = text;
  speechSynthesis.speak(speechUtterance);
}

// Modify the generateQuiz function to read questions aloud
function generateQuiz() {
  const quizContainer = document.getElementById("quiz-container");

  for (let i = 1; i <= 10; i++) {
    const questionObj = generateQuestion();
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<p class="mb-1">Question ${i}: ${questionObj.question} = </p><input type="text" id="answer${i}" class="form-control"><br>`;
    quizContainer.appendChild(questionDiv);

    // Add event listener to read question aloud when input is focused
    const inputField = document.getElementById(`answer${i}`);
    inputField.addEventListener('focus', function() {
      speakText(`Question ${i}. ${questionObj.question}`);
    });
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.classList.add("btn", "btn-primary", "mt-3");

  submitButton.addEventListener("click", function() {
    let userAnswers = [];
    let score = 0;
    
    // Loop through the input fields to retrieve user answers
    for (let i = 1; i <= 10; i++) {
      const tmp = parseInt(document.getElementById(`answer${i}`).value);
      userAnswers.push(tmp);
    }

    for (let i = 0; i < 10; i++) {
      if (userAnswers[i] === questionAnswers[i]) {
        score++;
      }
    }

    alert(`Score: ${score}`);
    console.log("User answers:", userAnswers);
  });
  
  quizContainer.appendChild(submitButton);

  window.onload = function() {
    speakText("Press Tab to Start. Report answer to 2 decimal places");
  };
  
}

generateQuiz();