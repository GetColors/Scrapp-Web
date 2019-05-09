<template>
  <div>
    <form>
      <div class="form-item">
        <input
          class="form-input"
          type="email"
          placeholder="Correo electrónico..."
          v-model="form.fields.email.value"
          v-on:keyup="validate"
        />
        <ul>
          <li class="error-text" v-for="error of form.fields.email.errors">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="form-item">
        <input
          class="form-input"
          type="password"
          placeholder="Contraseña..."
          v-model="form.fields.password.value"
        />
        <ul>
          <li class="error-text" v-for="error of form.fields.password.errors">
            {{ error }}
          </li>
        </ul>
      </div>
    </form>
    <basic-button :on-click="submit">Iniciar sesión</basic-button>
  </div>
</template>

<script>
import BasicButton from "../ui/BasicButton";

export default {
  name: "Login",
  components: {
    BasicButton
  },
  data() {
    return {
      form: {
        isValid: false,
        fields: {
          email: {
            value: "",
            errors: []
          },
          password: {
            value: "",
            errors: []
          }
        }
      }
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style scoped>
.form-input {
  border-bottom: 2px solid #ff1053;
  color: #ff1053;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 250px;
  font-size: 18px;
  margin-bottom: 10px;
}
.error-text {
  color: red;
}
.form-input {
  padding: 5px;
}
</style>
