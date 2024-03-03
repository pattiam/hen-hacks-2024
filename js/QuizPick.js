document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  // Get references to the drop-down menus and buttons
  const beforeDropdown = document.getElementById("beforeDropdown");
  const currentDropdown = document.getElementById("currentDropdown");
  const afterDropdown = document.getElementById("afterDropdown");
  const beforeButton = document.getElementById("beforeButton");
  const currentButton = document.getElementById("currentButton");
  const afterButton = document.getElementById("afterButton");

  // Add click event listeners to the buttons
  beforeButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedOption = beforeDropdown.value;
      if (selectedOption === 'Addition') {
          window.location.href = '../AdditionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Subtraction') {
          window.location.href = '../SubtractionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Multiplication') {
          window.location.href = '../MultiplicationQuiz.html'; // Redirect to the selected option
      }
  });

  currentButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedOption = currentDropdown.value;
      if (selectedOption === 'Addition') {
          window.location.href = '../AdditionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Subtraction') {
          window.location.href = '../SubtractionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Multiplication') {
          window.location.href = '../MultiplicationQuiz.html'; // Redirect to the selected option
      }
  });

  afterButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedOption = afterDropdown.value;
      if (selectedOption === 'Addition') {
          window.location.href = '../AdditionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Subtraction') {
          window.location.href = '../SubtractionQuiz.html'; // Redirect to the selected option
      }
      if (selectedOption === 'Multiplication') {
          window.location.href = '../MultiplicationQuiz.html'; // Redirect to the selected option
      }
  });
});
