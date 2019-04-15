import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

const app = firebase.initializeApp(config);

const firebaseService = {};

firebaseService.auth = () => {
  return app.auth();
};

export default firebaseService;
