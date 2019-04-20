<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Crear proyecto
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Crear proyecto</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="title">Título</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="project.title"
                  placeholder="Titulo de tu proyecto"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn btn-primary" @click="create">
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProject",
  data: function() {
    return {
      project: {}
    };
  },
  methods: {
    create() {
      if (this.project.title && this.project.title.length > 5) {
        this.$store.dispatch("createProject", this.project);
      }else{
        alert("titulo invalido");
      }
    }
  }
};
</script>

<style scoped></style>
