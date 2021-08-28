import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = { 
 //Add configuration here
 apiKey: "AIzaSyDPSmUWrEIryv05IoNGtiZ-NKtDmAVRVZM",
 authDomain: "complainginginaforum.firebaseapp.com",
 projectId: "complainginginaforum",
 storageBucket: "complainginginaforum.appspot.com",
 messagingSenderId: "1061741716946",
 appId: "1:1061741716946:web:673d7e6310b6604473940b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

