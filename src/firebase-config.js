import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDdbj5hMaRblJW10tYCTwaB4Ha12an5MzM",
    authDomain: "krypto-f8d1e.firebaseapp.com",
    projectId: "krypto-f8d1e",
    storageBucket: "krypto-f8d1e.appspot.com",
    messagingSenderId: "282699279282",
    appId: "1:282699279282:web:bd0a8a305d0f83edbe92ab",
    measurementId: "G-0VQE2XE7P6"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app); 