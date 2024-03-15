// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaawpDm67u8h2PH2zlQi_wzy3qFtcH00M",
  authDomain: "education-application-client.firebaseapp.com",
  projectId: "education-application-client",
  storageBucket: "education-application-client.appspot.com",
  messagingSenderId: "774918705990",
  appId: "1:774918705990:web:a9f763f9927c47fd3b0b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;