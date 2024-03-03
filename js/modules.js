// Sample array
const courses = ["counting", "shapes", "patterns", "adding", "subtracting", "place value"];

// Function to populate dropdown menus
function populateDropdowns(selectedIndex) {
    const beforeDropdown = document.getElementById("beforeDropdown");
    const currentDropdown = document.getElementById("currentDropdown");
    const afterDropdown = document.getElementById("afterDropdown");

    // Clear existing options
    beforeDropdown.innerHTML = "<option value=''>-- Before --</option>";
    currentDropdown.innerHTML = "<option value=''>-- Current --</option>";
    afterDropdown.innerHTML = "<option value=''>-- After --</option>";

    // Populate before dropdown
    for (let i = 0; i < selectedIndex; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = courses[i];
        beforeDropdown.appendChild(option);
    }

    // Populate current dropdown
    const currentOption = document.createElement("option");
    currentOption.value = selectedIndex;
    currentOption.textContent = courses[selectedIndex];
    currentDropdown.appendChild(currentOption);

    // Populate after dropdown
    for (let i = selectedIndex + 1; i < courses.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = courses[i];
        afterDropdown.appendChild(option);
    }
}

// Example: When an index is selected (change this according to your UI logic)
const selectedIndex = 2; // Example selected index
if (selectedIndex >= 0 && selectedIndex < courses.length) {
    populateDropdowns(selectedIndex);
}
