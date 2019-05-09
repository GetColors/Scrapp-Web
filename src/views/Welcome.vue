<template>
  <div id="welcome">
    <div class="option-box">
      <b-button type="is-danger" class="fixed" @click="toLogin"
        >Iniciar sesión</b-button
      >
      <p>o</p>
      <b-button type="is-danger" class="fixed" @click="toRegister"
        >Registrarse</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  components: {},
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style scoped>
#welcome {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.option-box {
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.button {
  width: 150px;
}
</style>
