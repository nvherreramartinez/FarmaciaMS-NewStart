import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyABSxBzNNGlboYjvpvaS684kYL7mKnw4ds",
    authDomain: "ms-ministerio-salud.firebaseapp.com",
    projectId: "ms-ministerio-salud",
    storageBucket: "ms-ministerio-salud.firebasestorage.app",
    messagingSenderId: "33511803205",
    appId: "1:33511803205:web:354d6e8a3092958060d62c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
