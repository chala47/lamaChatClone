import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
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
const analytics = getAnalytics(app);
export const auth = getAuth();