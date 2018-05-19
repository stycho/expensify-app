import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref().set({
//   name: 'Sean Tycho',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Vancouver',
//     country: 'Canada'
//   }
// });

// // database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Toronto');
// database.ref('attributes').set({
//   height: 123,
//   weight: 150
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed');
//   }).catch((e) => {
//     console.log(e)
//   });

// database.ref().update({
//   name: 'Mike',
//   age: 29
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// });

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: '',
//   amount: 350,
//   createdAt: 1000
// });