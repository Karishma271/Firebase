// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2XCuQRAbUxd4NF9rlMVwhS0qfZ8LWxCE",
  authDomain: "workshop-5b8a6.firebaseapp.com",
  databaseURL: "https://workshop-5b8a6-default-rtdb.firebaseio.com",
  projectId: "workshop-5b8a6",
  storageBucket: "workshop-5b8a6.appspot.com",
  messagingSenderId: "223100028919",
  appId: "1:223100028919:web:e82fa1f5988cba4e6510f2",
  measurementId: "G-G22G29QC25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

// Fetch Comments
const Comments = ref(database, "/Comments");

// On data event
onValue(
  Comments,
  (snapshot) => {
    // Create a reference to the ul element
    const ul = document.getElementById("messages");

    // Empty the ul emelemt
    ul.replaceChildren();

    // Loop through Comments
    snapshot.forEach((childSnapshot) => {
      // Get key and children
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      // Add message to list
      const text = document.createTextNode(childData.text);
      const li = document.createElement("li");
      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
