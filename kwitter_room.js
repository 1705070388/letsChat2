var firebaseConfig = {
    apiKey: "AIzaSyAeKCB0Ks4tfmtglaUstPxwtP8lVwouZgI",
    authDomain: "letschat-19ab9.firebaseapp.com",
    databaseURL: "https://letschat-19ab9-default-rtdb.firebaseio.com",
    projectId: "letschat-19ab9",
    storageBucket: "letschat-19ab9.appspot.com",
    messagingSenderId: "814726104868",
    appId: "1:814726104868:web:0634d043a68a67dde7d5b1",
    measurementId: "G-ZX07QGP0WP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();