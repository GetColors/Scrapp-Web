<template>
  <div class="mt-5">
    <form @submit.prevent="onSubmit" class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">Ingresar</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        name="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="$v.email.$model"
        autofocus
      >
      <small class="text-danger d-block" v-if="!$v.email.required">Campo obligatorio</small>
      <small class="text-danger d-block" v-if="!$v.email.email">Email invalido</small>


      <label for="inputPassword" class="sr-only">Password</label>
      <input
        id="inputPassword"
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      >
      <small class="text-danger d-block" v-if="!$v.password.minLength">Minimo 8 carácteres</small>


      <button class="btn btn-lg btn-primary btn-block" :disabled="$v.$invalid">Sign in</button>
      <small>¿Aún no te creas una cuenta? <router-link to="/register"> click aqui.</router-link></small>
      <router-view/>
    </form>
    {{$v}}
  </div>
</template>

<script>
import router from 'vue-router';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("home");
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  
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
