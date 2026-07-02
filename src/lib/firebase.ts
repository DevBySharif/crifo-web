import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYFP-ntXuXsHiQI3zYyBxPPlKBWPVzEBU",
  authDomain: "crifo-official.firebaseapp.com",
  projectId: "crifo-official",
  storageBucket: "crifo-official.firebasestorage.app",
  messagingSenderId: "",
  appId: "",
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
