<template>
  <div class="mt-5">
    <form @submit.prevent="onSubmit" class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">Registrar</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        name="email"
        id="inputEmail"
        class="form-control"
        placeholder="Correo"
        v-model="$v.email.$model"
        autofocus
      />
      <ul class="list__ul">
        <li class="text-danger" v-if="!$v.email.email">Email invalido</li>
      </ul>

      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        name="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="password"
      />
      <ul>
        <li class="text-danger" v-if="!$v.password.minLength">
          Minimo 8 carácteres
        </li>
      </ul>

      <label for="inputRepeatPassword" class="sr-only">Repeat Password</label>
      <input
        type="password"
        id="inputRepeatPassword"
        name="repeatPassword"
        class="form-control"
        placeholder="Repetir Contraseña"
        v-model="repeatPassword"
      />
      <ul>
        <li class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">
          Las contraseñas deben ser idénticas
        </li>
      </ul>

      <button class="btn btn-lg btn-primary btn-block" :disabled="$v.$invalid">
        Registrar
      </button>
      <small>
        ¿Ya tienes una cuenta?
        <router-link to="/login">click aqui.</router-link>
      </small>
    </form>
    <error-message v-if="error" :message="error"></error-message>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import ErrorMessage from "../ui/ErrorMessage";
import { mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  components: {
    ErrorMessage
  },
  computed: {
    ...mapGetters(["error"])
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      if (!this.$v.invalid) {
        this.$store
          .dispatch("register", {
            email: this.email,
            password: this.password,
            repeatPassword: this.repeatPassword
          })
          .then(() => {
            this.$router.push("login");
          });
      } else {
        alert(
          "WTF NIGGA!!! ARE YOU SERIUS, YOU MOTHERFUCKING BITCH SHOULD WRITE YOU FUCKING MAIL AND PASSWORD"
        );
      }
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
