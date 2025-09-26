# Firebase Study Guide

### 📄 Introduction to Firebase
- **What is Firebase?**
  - A platform developed by Google for creating mobile and web applications, providing various services like real-time databases, authentication, hosting, and cloud functions.

### 📦 Setting Up
- **Creating a Firebase Project**:
  - Go to the [Firebase Console](https://console.firebase.google.com/).
  - Click on "Add project" and follow the setup instructions.

### 📋 Firebase SDK
- **Installing Firebase SDK**:
```bash
npm install firebase
```

### 🔄 Authentication
- **Setting Up Authentication**:
  - Enable authentication methods in the Firebase Console under "Authentication" > "Sign-in method".

- **Using Firebase Authentication**:
```javascript
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```

### 📦 Firestore Database
- **Setting Up Firestore**:
  - Enable Firestore in the Firebase Console under "Firestore Database".

- **Using Firestore**:
```javascript
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = await addDoc(collection(db, "users"), {
  name: "Alice",
  age: 25
});
```

### 🔄 Realtime Database
- **Setting Up Realtime Database**:
  - Enable Realtime Database in the Firebase Console under "Realtime Database".

- **Using Realtime Database**:
```javascript
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
set(ref(db, 'users/1'), {
  username: "Alice",
  age: 25
});
```

### 📋 Cloud Functions
- **Setting Up Cloud Functions**:
  - Install Firebase CLI:
```bash
npm install -g firebase-tools
```
  - Initialize functions:
```bash
firebase init functions
```

- **Creating a Cloud Function**:
```javascript
const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
```

### 🔄 Hosting
- **Setting Up Firebase Hosting**:
  - Initialize hosting:
```bash
firebase init hosting
```
  - Deploy to Firebase Hosting:
```bash
firebase deploy
```

### 📦 Storage
- **Setting Up Firebase Storage**:
  - Enable Storage in the Firebase Console under "Storage".

- **Using Firebase Storage**:
```javascript
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'images/myImage.jpg');

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
```

### 📜 Analytics
- **Setting Up Firebase Analytics**:
  - Enable Analytics in the Firebase Console under "Analytics".

- **Using Firebase Analytics**:
```javascript
import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics();
logEvent(analytics, 'notification_received');
```
