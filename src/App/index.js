import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { getProjects } from '../helpers/data/projectData';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [admin, setAdmin] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      }
    });
  }, []);

  return (
    <>
     <Router>
      <div id="nav-styles">
        <NavBar admin={admin} />
      </div>
      <Routes
      projects={projects}
      setProjects={setProjects}
      />
      </Router>
      <Footer/>
    </>
  );
}

export default App;
