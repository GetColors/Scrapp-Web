import firebase from "firebase";

const createProjectService = async project => {
  const db = firebase.firestore();
  db.collection("projects")
    .add(project)
    .then(createdProject => {
      console.log("createdProject", createdProject);
      return { id: createdProject.id, title: project.title };
    })
    .catch(error => {
      alert(error.response);
    });
};

export default createProjectService;
