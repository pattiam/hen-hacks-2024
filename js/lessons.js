// JSON object containing units, lessons, activities, and games
var units = [
    {
      name: "Kindergarten",
      lessons: ["Counting", "Shapes", "Patterns"],
      activities: ["Counting Games", "Shape Sorting", "Pattern Matching"],
      games: ["Number Bingo", "Shape Memory", "Pattern Puzzles"]
    },
    {
      name: "1st Grade",
      lessons: ["Addition", "Subtraction", "Place Value"],
      activities: ["Addition Flashcards", "Subtraction Worksheets", "Place Value Charts"],
      games: ["Addition Race", "Subtraction Bowling", "Place Value Bingo"]
    },
    // Add more units as needed
  ];
  
  // Function to dynamically generate the sidebar menu
  function generateSidebar() {
    var sidebar = document.querySelector('#sidebar .list-unstyled');
    units.forEach(function(unit) {
      var listItem = document.createElement('li');
      listItem.innerHTML = `<a href="#" onclick="displayUnit('${unit.name}')">${unit.name}</a>`;
      sidebar.appendChild(listItem);
    });
  }
  
  // Function to display unit details when a unit is clicked
  function displayUnit(unitName) {
    var unit = units.find(u => u.name === unitName);
    var content = document.querySelector('#content');
    content.innerHTML = `
      <h2>${unit.name}</h2>
      <h3>Lessons</h3>
      <ul>${unit.lessons.map(lesson => `<li>${lesson}</li>`).join('')}</ul>
      <h3>Activities</h3>
      <ul>${unit.activities.map(activity => `<li>${activity}</li>`).join('')}</ul>
      <h3>Games</h3>
      <ul>${unit.games.map(game => `<li>${game}</li>`).join('')}</ul>
    `;
  }
  
  // Call the function to generate the sidebar menu
  generateSidebar();
  
  // Function to extract the unit name from the URL parameter
function getUnitFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('unit');
  }
  
  // Function to display unit details based on the URL parameter
  function displayUnitFromURL() {
    var unitName = getUnitFromURL();
    if (unitName) {
      displayUnit(unitName);
    }
  }
  
  // Call the function to display unit based on URL parameter
  displayUnitFromURL();