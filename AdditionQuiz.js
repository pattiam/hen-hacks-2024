// Function to generate random addition questions
let questionAnswers = []

function generateAdditionQuestion() {
    const num1 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const num2 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const answer = num1 + num2;
    questionAnswers.push(answer)
    return { question: `${num1} + ${num2}`, answer: answer };
}


// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    for (let i = 1; i <= 10; i++) {
        const questionObj = generateAdditionQuestion();
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>Question ${i}: ${questionObj.question} = </p><input type="text" id="answer${i}"><br>`;
        quizContainer.appendChild(questionDiv);
    }

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", function() {
        let userAnswers = []
        let score = 0
        // Loop through the input fields to retrieve user answers
        for (let i = 1; i <= 10; i++) {
            const tmp = parseInt(document.getElementById(`answer${i}`).value);
            userAnswers.push(tmp);
        }
        for (let i = 1; i <= 10; i++) {
            if (userAnswers[i] === questionAnswers[i]) {
                score++;
            }
        }
        alert(score)
        console.log("User answers:", userAnswers);
    });
    
    quizContainer.appendChild(submitButton);
    console.log(questionAnswers);
}





generateQuiz();


//submitButton.onclick = calculateScore;