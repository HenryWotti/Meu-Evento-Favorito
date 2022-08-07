import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDrHMhYpXiUSZ9pLG2dyXBlfIe6rEK6k88",
    authDomain: "meu-evento-favorito.firebaseapp.com",
    projectId: "meu-evento-favorito",
    storageBucket: "meu-evento-favorito.appspot.com",
    messagingSenderId: "869502774633",
    appId: "1:869502774633:web:5a93acbfa37f0472a761f8",
    measurementId: "G-5X49FV60T0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);