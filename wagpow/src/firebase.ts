import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyBkkcBxnEIP_HnzaBmDtHBrN7f-FSw0dG4",
	authDomain: "savethedate-ff7b6.firebaseapp.com",
	projectId: "savethedate-ff7b6",
	storageBucket: "savethedate-ff7b6.firebasestorage.app",
	messagingSenderId: "99233104888",
	appId: "1:99233104888:web:2916f7640b473985358c0d",
	measurementId: "G-S46QWDP8P3",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
