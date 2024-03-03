import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref, get, onValue, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
const database = getDatabase(app)
const auth = getAuth(app);

//const buttonID = getElementById('submitData')
const emailInput = document.getElementById('InputEmail1');
const password1Input = document.getElementById('InputPassword1');
const password2Input = document.getElementById('InputPassword2');
const username1 = document.getElementById('InputUsername1')
const name1 = document.getElementById('InputName1')

submitData.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password1 = password1Input.value;
    const password2 = password2Input.value;
    const username = username1.value
    const name = name1.value

    if (password1 != password2) {
        alert("Passwords are not equal!")
        return;
    }
    createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            if (user) {
                const userData = {
                    name: name,
                    username: username,
                    email: email,
                    password: password1,
                    profileCreated: false
                };

                // Log the user data to ensure it's correct
                console.log('User Data:', userData);

                // Set the initial user data, including the profileCreated flag
                set(ref(database, 'users/' + user.uid), userData)
                    .then(() => {
                        // Data has been written to the database
                        console.log('User data written to the database.');
                        alert('User created! You have been signed in');
                        window.location.href = "home.html";
                    })
                    .catch((error) => {
                        console.error('Error writing user data:', error);
                        alert('Error during registration.');
                    });
            } else {
                console.error('User not found after registration.');
                alert('Error during registration.');
            }
        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
        e.preventDefault();
    });
});
