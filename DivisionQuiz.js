// Function to generate random addition questions
let questionAnswers = []

function generateAdditionQuestion() {
    const num1 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const num2 = Math.floor(Math.random() * 20); // Generate a random number between 0 and 20
    const answer = num1 / num2;
    const finalanswer = answer.toFixed(2)
    questionAnswers.push(finalanswer)
    return { question: `${num1} / ${num2} (do not round, only write down till 2 decimals)`, answer: finalanswer };
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
            const tmp = parseFloat(document.getElementById(`answer${i}`).value);
            const tmp2 = tmp.toFixed(2)
            userAnswers.push(tmp2);
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