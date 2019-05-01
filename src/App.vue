<template>
  <div id="app">
    <navbar v-if="isLoggedIn"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/ui/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar
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
