// Function to generate random subtraction questions
let questionAnswers = [];

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
  const num2 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
  const answer = num1 - num2;
  questionAnswers.push(answer);
  return { question: `${num1} minus ${num2}`, answer: answer };
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
    speakText("Press Tab to Start");
  };
  
}

generateQuiz();

// Function to update font size and weight
function updateFontStyles(fontSize, fontWeight) {
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.fontWeight = fontWeight;
}

// Event listener for font size slider
const fontSizeSlider = document.getElementById('fontSizeSlider');
fontSizeSlider.addEventListener('input', function() {
  const fontSize = this.value;
  updateFontStyles(fontSize, null);
});

// Event listener for font weight slider
const fontWeightSlider = document.getElementById('fontWeightSlider');
fontWeightSlider.addEventListener('input', function() {
  const fontWeight = this.value;
  updateFontStyles(null, fontWeight);
});

// Default font size and weight
updateFontStyles(16, 400);
