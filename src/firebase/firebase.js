import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };

  console.log(process.env.REACT_APP_DATABASE_URL);
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default};

  expensify-ac5ed


AIzaSyAFXZDejqZnee347e5RyOTbtCS_1wseie4
//   database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// })

  // child_removed: we'll see the item that was deleted
//   database.ref('expenses').on('child_removed', snapshot => {
//       console.log(snapshot.key, snapshot.val());
//   })

//   database.ref('expenses').on('value', snapshot => {
//     const expenses = [];
//         snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });
//   database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       })
//       console.log(expenses);
//   })

  

//   const key1 = database.ref().push();
//   const key2 = database.ref().push();
//   const key3 = database.ref().push();
//   const updates = {};

//   updates[key1]={
//         description: 'dfg',
//         note: 'efds',
//         amount: 7.09,
//         createdAt: 2342342
//     }
    
//     updates[key2]={
//         description: '342',
//         note: 'efds',
//         amount: 8.09,
//         createdAt: 23442
//     }

//     updates[key3]={
//         description: 'sfd',
//       note: 'hfgs',
//       amount: 10.09,
//       createdAt: 23423434342
//     }

//   database.ref('expenses').push(updates[key3])
 
//   database.ref('notes').push({
//       title: 'To do',
//       body: 'React Native, Angular, Python'
//   }); 
//   database.ref().set({
//       name: 'Marcus Stancil',
//       age: 26,
//       isSingle: true,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Fort Washington',
//           country: 'United States'
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed ', e);
//   })

//   //This way we can change the age and not the entire database
//     // database.ref('age').set(27);

//     // database.ref('location/city').set('Atlanta');  

//     database.ref('attributes/height').set({
//         height: 58,
//         weight: 175
//     }).then(()=>{
//       console.log('Data is saved');
//     }).catch((e) => {
//         console.log('This failed ', e);
//     });

//   console.log('Made a request to firebase;') 

    // database.ref().child('isSingle')
    // .remove()
    // .then(() => {
    //     console.log('Data was deleted')
    // })
    // .catch(e => {
    //     console.log('Did not delete data')
    // });

    // Another way to delete data
    // database.ref('isSingle').set(null);
    
    // Updating data efficiently
    // database.ref().update({
    //     name: 'Moody',
    //     age: 24,
    //     job: 'Software developer',
    //     isSingle: null,
    //     //How to update nested data
    //     'location/city': 'Chicago'
    // });

    // database.ref().update({
    //     stressLevel: 9,
    //     'job/company': 'Amazon',
    //     'location/city': 'Seattle'
    // })

    // Fecthing data from the database
    // database.ref()
    //     .once('value')
    //     .then(snapshot => {
    //         const val = snapshot.val();
    //         console.log(val);
    //     })
    //     .catch( e => {
    //         console.log('Error fecting data ', e)
    //     })

    // If you want the data from a certain property
    // database.ref('location')
    //     .once('value')
    //     .then(snapshot => {
    //         const val = snapshot.val();
    //         console.log(val);
    //     })
    //     .catch( e => {
    //         console.log('Error fecting data ', e)
    //     })

    //This function will allow us to get the data when something changes

    // const onValueChange = database.ref().on('value', snapshot => {
    //     console.log(snapshot.val());
    // }, e => {
    //     console.log('Error fetching data', e);
    // })

    // setTimeout(() => {
    //     database.ref('age').set(29);
    // }, 3500);

    // setTimeout(() => {
    //     database.ref().off(onValueChange);
    // }, 7000);

    // setTimeout(() => {
    //     database.ref('age').set(29)
    // }, 10500);

    // const onValueChange = database.ref().on('value', snapshot => {
    //     console.log(snapshot.val().name + " is a " + snapshot.val().job.title + " at " + snapshot.val().location.city);
    // }, e => {
    //     console.log('Error fetching data', e);
    // })

    // database.ref().update({
    //     'job/title': 'software engineer',
    //     'location/city': 'San Francisco'
    // })