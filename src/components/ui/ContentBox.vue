<template>
  <div class="content-box" :class="color">
    <div class="content-header">
      {{ header }}
    </div>
    <div class="content-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBox",
  props: {
    header: String,
    color: {
      type: String,
      default: "gray"
    }
  }
};
</script>

<style>
.content-box {
  width: 300px;
  min-height: 20vh;
  background-color: white;
}

.gray {
  box-shadow: 0 0 5px 1px gray;
}

.content-header {
  min-height: 12vh;
  border: solid white;
  border-left: none;
  border-right: none;
  border-top: 2px;
  border-bottom: 2px;
  background-color: #6c6ea0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}
.content-body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
}
</style>
