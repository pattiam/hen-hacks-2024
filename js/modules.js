import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0QSaYlQu2kOGkG7sdQm5_XbLI5B_olqg",
    authDomain: "henhack2024.firebaseapp.com",
    projectId: "henhack2024",
    storageBucket: "henhack2024.appspot.com",
    messagingSenderId: "789099395722",
    appId: "1:789099395722:web:859d68ba1131ad72a08b73",
    measurementId: "G-QE5DCH5NT9"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const userRef = ref(database, 'users/' + user.uid);

        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();

                if (userData.level !== undefined) {
                    const level = 3//userData.level;
                    populateDropdowns(level);
                }
            }
        });
    }
});

// Sample array
const courses = ["Addition", "Subtraction", "Multiplication", "Division","Geometry","Fractions","Decimals"];

// Function to populate dropdown menus based on level
function populateDropdowns(level) {
    const beforeDropdown = document.getElementById("beforeDropdown");
    const currentDropdown = document.getElementById("currentDropdown");
    const afterDropdown = document.getElementById("afterDropdown");

    // Clear existing options
    beforeDropdown.innerHTML = "<option value=''>-- Before --</option>";
    currentDropdown.innerHTML = "<option value=''>-- Current --</option>";
    afterDropdown.innerHTML = "<option value=''>-- After --</option>";

    // Populate before dropdown with completed units (before level)
    for (let i = 0; i < level; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = courses[i];
        beforeDropdown.appendChild(option);
    }

    // Populate current dropdown with the current unit (level)
    const currentOption = document.createElement("option");
    currentOption.value = level;
    currentOption.textContent = courses[level];
    currentDropdown.appendChild(currentOption);

    // Populate after dropdown with future units (after level)
    for (let i = level + 1; i < courses.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = courses[i];
        afterDropdown.appendChild(option);
    }
}