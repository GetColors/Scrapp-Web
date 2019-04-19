<template>
  <div id="google_auth">
    <button @click="authentication">Iniciar sesión con Google</button>
  </div>
</template>

<script>
export default {
  name: "GoogleAuth",
  methods: {
    async authentication() {
      this.$store
        .dispatch("login")
        .then(() => {
          this.$router.push("/home");
        })
        .catch(() => {
          alert("Something was wrong");
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
