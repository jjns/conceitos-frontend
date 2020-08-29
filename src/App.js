import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [ projects, setProjects ] = useState(['Desenvolvimento App', 'Front-end web']);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        // Fragment (Container que envolve para não afetar na estilização)
        <>
            <Header title="Projects"/>

            <img src={backgroundImage} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;