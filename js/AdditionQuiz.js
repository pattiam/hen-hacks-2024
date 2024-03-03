let totalScore = parseInt(localStorage.getItem('totalScore')) || 0;

// Function to generate random addition questions
let questionAnswers = [];

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const num2 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const answer = num1 + num2;
    questionAnswers.push(answer);
    return { question: `${num1} + ${num2}`, answer: answer };
}

// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    for (let i = 1; i <= 10; i++) {
        const questionObj = generateQuestion();
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p class="mb-1">Question ${i}: ${questionObj.question} = </p><input type="text" id="answer${i}" class="form-control"><br>`;
        quizContainer.appendChild(questionDiv);
    }

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("btn", "btn-primary", "mt-3");

    submitButton.addEventListener("click", function () {
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

        // Add the score to the total score
        totalScore += score;

        // Save the total score to localStorage
        localStorage.setItem('totalScore', totalScore);

        alert(`Score: ${score}`);
        console.log("User answers:", userAnswers);
        console.log('cumulative score: ', totalScore)
    });

    quizContainer.appendChild(submitButton);
}

generateQuiz();