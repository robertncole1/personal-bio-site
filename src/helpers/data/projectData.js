import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get request
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export { getProjects, deleteProject };
