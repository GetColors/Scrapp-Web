<template>
  <div class="mt-5">
    <form @submit.prevent="onSubmit" class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">Ingresar</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        name="email"
        class="form-control"
        placeholder="Email address"
        v-model="email"
        autofocus
      >


      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      >


      <button class="btn btn-lg btn-primary btn-block">Sign in</button>
      <small>¿Aún no te creas una cuenta? <router-link to="/register"> click aqui.</router-link></small>
      <router-view/>
    </form>
  </div>
</template>

<script>
import router from 'vue-router';
import loginUserService from '../../services/authentication/loginService';
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      });
      this.$router.push("home");
    }
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 430px;
  padding: 15px;
  margin: auto;
  border: 3px solid #f1f1f1;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 25px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
