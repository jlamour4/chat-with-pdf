import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2wMPC6sx4o91lm74RzacH3QqASq3zvMo",
  authDomain: "chat-with-pdf-f809d.firebaseapp.com",
  projectId: "chat-with-pdf-f809d",
  storageBucket: "chat-with-pdf-f809d.appspot.com",
  messagingSenderId: "901220873811",
  appId: "1:901220873811:web:5b82aa1ae295c9ea0e38a6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };