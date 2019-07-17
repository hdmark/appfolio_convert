const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.hitCounter = functions.https.onRequest((req, res) => {
  const counterRef = admin.database().ref('/hit_counter');
  counterRef.transaction(current => {
    return (current || 0) + 1;
  });
  res.send('page view counted');
  return;
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
