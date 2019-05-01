<template>
  <div id="error-message">
    <div class="notification is-danger">
      <button class="delete" @click="close">x</button>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: String
  },
  methods: {
    close() {
      this.$store.dispatch("closeError");
    }
  }
};
</script>

<style scoped>
#error-message {
  position: absolute;
  display: flex;
  align-self: center;
  justify-self: center;
}
</style>
