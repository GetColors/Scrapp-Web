<template>
  <div id="app">
    <error-message></error-message>
    <navbar v-if="isLoggedIn"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/ui/Navbar";
import ErrorMessage from "./components/ui/ErrorMessage";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    ErrorMessage
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
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
