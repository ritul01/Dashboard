// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACQYsV-1_AlZRU-C0J0w9M55f49Sm7o_A",
    authDomain: "dashboard-8f54d.firebaseapp.com",
    projectId: "dashboard-8f54d",
    storageBucket: "dashboard-8f54d.firebasestorage.app",
    messagingSenderId: "289991177412",
    appId: "1:289991177412:web:2fff411cb3a016b32ac591",
    measurementId: "G-EDVFJRZK0G"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during logout:", error);
  }
};