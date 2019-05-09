<template>
  <div class="container">
    <content-box color="pink" header="Ingresa a tu cuenta">
      <login-form></login-form>
    </content-box>
  </div>
</template>

<script>
import LoginForm from "../components/authentication/LoginForm";
import ContentBox from "../components/ui/ContentBox";

export default {
  name: "Login",
  components: {
    ContentBox,
    LoginForm
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
