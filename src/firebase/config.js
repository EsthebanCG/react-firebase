import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNd-sX3Mu2XyhZyM8_uwcF--QCsE-HGjk",
    authDomain: "firegram-album.firebaseapp.com",
    databaseURL: "https://firegram-album.firebaseio.com",
    projectId: "firegram-album",
    storageBucket: "firegram-album.appspot.com",
    messagingSenderId: "69074881817",
    appId: "1:69074881817:web:26a2f861273de0cf210988"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }