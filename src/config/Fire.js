import firebase from "firebase";


const config = {
    apiKey: "AIzaSyDYUq8dTRfMgNppV4b4tuyzQYEsCMSZRCc",
    authDomain: "embd-project.firebaseapp.com",
    databaseURL: "https://embd-project.firebaseio.com",
    projectId: "embd-project",
    storageBucket: "",
    messagingSenderId: "607864296997",
    appId: "1:607864296997:web:ac6224d195105d20"
  };   
  const fire = firebase.initializeApp(config);
  export default fire;
  