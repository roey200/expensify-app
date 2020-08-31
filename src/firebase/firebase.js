import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KE,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   }).catch(() => {
//     console.log('Opps something is wrong')
//   })


// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1200,
//     createdAt: 31231231
// })





// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native'
// })

// const onValueChange =  database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching ', e)
// })

// setTimeout(() => {
//     database.ref('age').set(22)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch(() => {
//         console.log('Fetching data failed ', e)
//     })

// database.ref().set({
//       name: 'Roey M',
//       age: 30,
//       stressLevel: 6,
//       job: { 
//           title: 'Software Developer',
//           company: 'Mass'
//     },
//       location: {
//           city: 'Amsterdam',
//           country: 'Netherlands'
//       }
//   }).then(() => {
//       console.log('Data is Saved')
//   }).catch((e) => {
//     console.log('Failed ', e)
//   })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'AMS'
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed')
//     }).catch((e) => {
//         console.log('Data removed failed ', e)
//     })