import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD8JbCHadnU1jICfH1Q6c-7jZjMXIQErkA",
  authDomain: "expensify-a5d29.firebaseapp.com",
  databaseURL: "https://expensify-a5d29.firebaseio.com",
  projectId: "expensify-a5d29",
  storageBucket: "expensify-a5d29.appspot.com",
  messagingSenderId: "16217395999"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Sean Tycho',
  age: 26,
  isSingle: false,
  location: {
    city: 'Vancouver',
    country: 'Canada'
  }
});

// database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('Toronto');
database.ref('attributes').set({
  height: 123,
  weight: 150
});