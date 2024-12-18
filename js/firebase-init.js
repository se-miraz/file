// firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyBkTJzSymd5o7hOGFjtQjRzA8BWY09jX3A",
  authDomain: "file-63e65.firebaseapp.com",
  projectId: "file-63e65",
  storageBucket: "file-63e65.appspot.com",
  messagingSenderId: "546982460468",
  appId: "1:546982460468:web:696af12875e5d1311ede61",
  measurementId: "G-9XE2RR3B1G"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
