document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  // Get references to the drop-down menus and buttons
  const beforeDropdown = document.getElementById("beforeDropdown");
  const currentDropdown = document.getElementById("currentDropdown");
  const afterDropdown = document.getElementById("afterDropdown");
  const beforeButton = document.getElementById("beforeButton");
  const currentButton = document.getElementById("currentButton");
  const afterButton = document.getElementById("afterButton");
  const quizzes = ['Addition','Subtraction','Multiplication','Division'];

  // Add click event listeners to the buttons
  beforeButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedOption = beforeDropdown.value;
      window.location.href = quizzes[selectedOption] + 'Quiz.html'
  });

  currentButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedOption = currentDropdown.value;
      window.location.href = quizzes[selectedOption] + 'Quiz.html'
  });

});
