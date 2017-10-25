import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCrXq05mpc5Puoynz0-uaK70LsMNjhFTg4",
    authDomain: "hackathon-usairim.firebaseapp.com",
    databaseURL: "https://hackathon-usairim.firebaseio.com",
    projectId: "hackathon-usairim",
    storageBucket: "hackathon-usairim.appspot.com",
    messagingSenderId: "274912772487"
  };
  firebase.initializeApp(config);
 
  let auth = firebase.auth()  
  let db = firebase.database()
  export {
    db,
    auth                    
  };