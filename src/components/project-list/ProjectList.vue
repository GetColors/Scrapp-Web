<template>
  <div id="project_list_box">
    <ul id="project_list">
      <li v-for="project of getProjects">
        <div class="box">
          <div class="card">
            <div class="card-body">
              {{ project.title }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data: function() {
    return {
      projects: []
    };
  },
  created: function() {
    this.$store.dispatch("fetchAllProjects");
  },
  computed: {
    getProjects: function() {
      console.log(this.$store.getters.allProjects);
      return this.$store.getters.allProjects;
    }
  }
};
</script>

<style scoped>
#project_list {
  width: 400px;
}
.card {
  width: 80%;
  cursor: pointer;
}

.card:hover {
  background-color: #c8ecff;
}
</style>
