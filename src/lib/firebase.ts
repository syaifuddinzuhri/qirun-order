// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmr21OrDbecwd_j5LgXoa9gWr45eaMMes",
  authDomain: "menu-qirun.firebaseapp.com",
  projectId: "menu-qirun",
  storageBucket: "menu-qirun.firebasestorage.app",
  messagingSenderId: "498176253074",
  appId: "1:498176253074:web:a16db3aff0d96924b25a4b",
  measurementId: "G-ZRPC8KZLT7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
