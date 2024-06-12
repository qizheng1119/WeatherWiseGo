/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAHedT1ACLdCj4-cRUKshESB92EjJ0458M",
    authDomain: "weatherwise-c635e.firebaseapp.com",
    projectId: "weatherwise-c635e",
    storageBucket: "weatherwise-c635e.appspot.com",
    messagingSenderId: "746041536239",
    appId: "1:746041536239:web:b768b6a26124f350fef51a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const database = firebase.database();
  
  function register(){
      
  }