import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref, get, onValue, update, } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
    const userRef = ref(database, 'users/' + user.uid);

    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            // Get the user's data from the snapshot
            const userData = snapshot.val();

            // Check if the user's data contains a name
            if (userData.name) {
                var username = userData.username; // Assuming the user's name is stored under "name"
                document.getElementById("demo").innerHTML = username;
                console.log(userData.level)
            }
        }
    });

const logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert("User has signed out!")
    })
    window.location.href = "login.html"
})
    
});