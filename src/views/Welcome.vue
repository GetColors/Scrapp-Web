<template>
  <div id="welcome">
    <login></login>
  </div>
</template>

<script>
import Login from "../components/authentication/Login";

export default {
  name: "Welcome",
  components: {
    Login
  }
};
</script>

<style scoped></style>