import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
const username = document.getElementById('InputUsername1')

submitData.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password1 = password1Input.value;
    signInWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            })
            // ...
            alert("user logged in");
            window.location.href = "home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            e.preventDefault();
        });
});
