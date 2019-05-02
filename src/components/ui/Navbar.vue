<template>
  <nav class="navbar navbar-primary bg-primary">
    <a class="navbar-brand" href="#"></a>    
      <button class="btn btn-primary fixed-right" @click="logout">Cerrar sesión</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => alert("Something was wrong."));
    }
  }
};
</script>
