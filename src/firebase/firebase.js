import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAOMVVHVPMPIu-DN7205cSr_9WYbujdh_w",
  authDomain: "todo-d885d.firebaseapp.com",
  databaseURL: "https://todo-d885d.firebaseio.com",
  projectId: "todo-d885d",
  storageBucket: "todo-d885d.appspot.com",
  messagingSenderId: "573247266791",
  appId: "1:573247266791:web:c4530d8c4de085a5db6742",
  measurementId: "G-54KPE2252T"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database()

export { firebase, database  as default }
