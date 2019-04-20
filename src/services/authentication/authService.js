import firebase from "firebase";

const authService = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
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
