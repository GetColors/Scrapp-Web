import firebase from "firebase";

const fetchAllProjectsService = async () => {
  const db = firebase.firestore();
  return db
    .collection("projects")
    .get()
    .then(querySnapshot => {
      let projects = [];
      querySnapshot.forEach(doc => {
        projects.push({
          id: doc.id,
          title: doc.data().title
        });
      });
      return projects;
    });
};

export default fetchAllProjectsService;
