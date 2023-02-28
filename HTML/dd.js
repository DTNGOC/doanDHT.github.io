// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7LgcZ-MXe7KAsOHvlja7hHFT60pbpTQM",
  authDomain: "nhiet-do-do-am-98af0.firebaseapp.com",
  databaseURL: "https://nhiet-do-do-am-98af0-default-rtdb.firebaseio.com",
  projectId: "nhiet-do-do-am-98af0",
  storageBucket: "nhiet-do-do-am-98af0.appspot.com",
  messagingSenderId: "530623064737",
  appId: "1:530623064737:web:1484aa374668edb6bc9ee0",
  measurementId: "G-50HDZGQ6J1"
};
// Initialize Firebase
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  database.ref("/Nhietdo").on("value",function(snapshot) {
    var nhietdo = snapshot.val();
    document.getElementById("nhietdo").innerHTML= nhietdo ;
  
  
  });
  database.ref("/Doam").on("value",function(snapshot) {
    var doam = snapshot.val();
    document.getElementById("doam").innerHTML= doam ;
  });