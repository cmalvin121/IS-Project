import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2QQEIj7kdjJgj0qNptnUG2Tl8ILC-LDU",
    authDomain: "testing-purposes-4aaca.firebaseapp.com",
    databaseURL: "https://testing-purposes-4aaca-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testing-purposes-4aaca",
    storageBucket: "testing-purposes-4aaca.appspot.com",
    messagingSenderId: "469281703912",
    appId: "1:469281703912:web:84f72377d61d663ca4065d",
    measurementId: "G-01W01QKBNB"
  };

  <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

  export default function startfirebase(){
      var FB =firebase.initializeApp(firebaseConfig);
      return FB;
  }