<template>
  <div id="home">
    <new-project></new-project>
    <project-list></project-list>
  </div>
</template>

<script>
import ProjectList from "../components/project-list/ProjectList";
import NewProject from "../components/new-project/NewProject";

export default {
  name: "Home",
  components: {
    ProjectList,
    NewProject
  }
};
</script>

<style scoped>
#home {
  display: flex;
  align-items: center;
  padding: 10vh;
  flex-direction: column;
}
</style>
