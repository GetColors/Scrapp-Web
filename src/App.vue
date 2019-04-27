<template>
  <div id="app">
    <navbar v-if="isLogged"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/base/Navbar/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["isLogged"])
  }
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
