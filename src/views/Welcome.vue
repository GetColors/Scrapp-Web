<template>
  <div id="welcome">
    <google-auth></google-auth>
  </div>
</template>

<script>
import GoogleAuth from "../components/authentication/GoogleAuth";

export default {
  name: "Welcome",
  components: {
    GoogleAuth
  }
};
</script>

<style scoped></style>
