import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeqz2DMkH2dWJN7yKg6K_aDJJ7w0jZCYg",
  authDomain: "m9-conceptual-session.firebaseapp.com",
  projectId: "m9-conceptual-session",
  storageBucket: "m9-conceptual-session.appspot.com",
  messagingSenderId: "740694476253",
  appId: "1:740694476253:web:a2ada4865e2adef4136234"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);