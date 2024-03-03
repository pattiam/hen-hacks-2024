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

// Check authentication state
auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      console.log("User is logged in:", user);
    } else {
      // No user is signed in.
      console.log("User is not logged in. Redirecting...");
      window.location.href = "index.html"; // Redirect to login page
    }
  });