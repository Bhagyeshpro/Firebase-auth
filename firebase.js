// Import the functions you need from the SDKs you need
import  firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLoOVTeKlGxmC1UxnaRaoLJsw_W2eZ0I4",
  authDomain: "fir-auth-7aa6e.firebaseapp.com",
  projectId: "fir-auth-7aa6e",
  storageBucket: "fir-auth-7aa6e.appspot.com",
  messagingSenderId: "259071429255",
  appId: "1:259071429255:web:fd879eb40467fa2c814622",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
