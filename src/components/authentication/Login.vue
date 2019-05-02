<template>
  <v-container>
    <v-layout>
      <v-flex md4></v-flex>
      <v-flex md4>
        <v-card>
          <form @submit.prevent="onSubmit" class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal text-center">Ingresar</h1>

            <label for="inputEmail" class="sr-only">Email address</label>
            <input
                    name="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Correo"
                    v-model="$v.email.$model"
            />
            <ul class="list__ul">
              <li class="text-danger" v-if="!$v.email.email">Email invalido</li>
            </ul>

            <label for="inputPassword" class="sr-only">Password</label>
            <input
                    id="inputPassword"
                    type="password"
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

            <button class="btn btn-lg btn-primary btn-block" :disabled="$v.$invalid">
              Iniciar sesión
            </button>
            <small
            >¿Aún no te creas una cuenta?
              <router-link to="/register"> click aqui.</router-link></small
            >
            <router-view />
          </form>
          <error-message v-if="error" :message="error"></error-message>
        </v-card>
      </v-flex>
      <v-flex md4></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import ErrorMessage from "../ui/ErrorMessage";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["error"])
  },
  components: {
    ErrorMessage
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
      if (!this.$v.invalid) {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push("/home");
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
