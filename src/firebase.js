import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBvVhvLFEqhGSjGEiUozSFXupjId9zuKPE",
  authDomain: "netflix-clone-gh.firebaseapp.com",
  projectId: "netflix-clone-gh",
  storageBucket: "netflix-clone-gh.appspot.com",
  messagingSenderId: "709672707879",
  appId: "1:709672707879:web:144bd8df808e105603eb02",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
