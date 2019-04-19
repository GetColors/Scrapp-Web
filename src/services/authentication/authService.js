import firebase from "firebase";

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET
};

const authService = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .initializeApp(config)
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      return result.credential.idToken;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default authService;
