<template>
  <div id="app">
    <button @click="authentication">Autenticar</button>
    <p v-show="user.name">{{user.name}} - {{user.email}}</p>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseService from "./firebaseService";

export default {
  name: "App",
  data() {
    return {
      user: {
        name: null,
        email: null
      }
    };
  },

  methods: {
    authentication() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebaseService
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // The signed-in user info.
          const user = result.user;

          this.user.name = user.displayName;
          this.user.email = user.email;

          console.log(user);
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(error.message);
        });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

html body {
  height: 100%;
  width: 100%;
}

ul li {
  list-style: none;
}
</style>
