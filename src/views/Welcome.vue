<template>
  <div id="welcome">
    <div class="option-box">
      <router-link class="link-button" to="/login">Iniciar sesión</router-link>
      <p>o</p>
      <router-link class="link-button" to="/register">Registrarse</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  components: {}
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

.link-button {
  height: 40px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
}
</style>
