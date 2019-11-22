import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFXZDejqZnee347e5RyOTbtCS_1wseie4",
    authDomain: "expensify-ac5ed.firebaseapp.com",
    databaseURL: "https://expensify-ac5ed.firebaseio.com",
    projectId: "expensify-ac5ed",
    storageBucket: "expensify-ac5ed.appspot.com",
    messagingSenderId: "132404443248",
    appId: "1:132404443248:web:93f0b3bd6048eed9ca1cb5",
    measurementId: "G-78KLBYM6F5"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
      name: 'Marcus Stancil',
      age: 26,
      isSingle: true,
      loaction: {
          city: 'Fort Washington',
          country: 'United States'
      }
  });

  //This way we can change the age and not the entire database
  database.ref('age').set(27);
