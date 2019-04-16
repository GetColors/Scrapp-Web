<template>
  <div id="google_auth">
    <button @click="authentication">Iniciar sesión con Google</button>
  </div>
</template>

<script>
import authService from "./../../services/authentication/authService.js";

export default {
  name: "GoogleAuth",
  methods: {
    authentication() {
      authService()
        .then(result => {
          console.log(result);
        })
        .catch(function() {
          alert("No es posible iniciar sesión en este momento");
        });
    }
  }
};
</script>

<style scoped>
#google_auth {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: 200px;
  height: 40px;
  background-color: white;
  border: 2px black solid;
  border-radius: 10px;
}

button:hover {
  border: 2px dodgerblue solid;
  cursor: pointer;
}
</style>
