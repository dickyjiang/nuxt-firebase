import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase v9 --> dapet dari firebase doc
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

if (!firebase.apps.length) {
    const config = {
        apiKey: 'AIzaSyC7QBOzZakKN_KaJ5P3Bb3pCA6KsWobE_w',
        authDomain: 'sams-abdea.firebaseapp.com',
        // databaseURL: '<replace this>',
        projectId: 'sams-abdea',
        storageBucket: 'sams-abdea.appspot.com',
        messagingSenderId: '3508375956'
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export default {fireDb}
