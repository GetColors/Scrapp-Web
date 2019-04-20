<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-primary fixed-right" @click="logout">Cerrar sesión</button>
      </form>
    </div>
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

<style scoped>
.btn {
  position: absolute;
  right: 20px;
}
</style>
