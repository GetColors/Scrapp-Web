<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

html body {
  height: 100%;
  width: 100%;
}

ul li {
  list-style: none;
}
</style>
