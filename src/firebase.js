import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDWC0AUuFqtF71hILXJSKOIKDR4adrKz1U",
  authDomain: "chala-chat.firebaseapp.com",
  projectId: "chala-chat",
  storageBucket: "chala-chat.appspot.com",
  messagingSenderId: "302198057063",
  appId: "1:302198057063:web:55c490211a847d58c58cc2",
  measurementId: "G-RYHQRDP7ZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage=getStorage();
export const db=getFirestore();