<template>
  <button @click="onClick" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.button {
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 150px;
  border-radius: 10px;
  background-color: #ff1053;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
