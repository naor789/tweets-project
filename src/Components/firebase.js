import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyAWANt_736dKUom01Ni9R_XjaXSsJwoCrI",
    authDomain: "twitter-project-aa9e9.firebaseapp.com",
    databaseURL: "https://twitter-project-aa9e9-default-rtdb.firebaseio.com",
    projectId: "twitter-project-aa9e9",
    storageBucket: "twitter-project-aa9e9.appspot.com",
    messagingSenderId: "1092967308902",
    appId: "1:1092967308902:web:a9ced5de95f5a9b92f97a7"

})

export const database = firebase.firestore(app)
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()
export default app