<template>
  <div>
    <div class="notification is-danger">
      <button class="delete"></button>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: String
  }
};
</script>
