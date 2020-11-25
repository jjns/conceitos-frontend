import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
    // useState retorna duas variáveis:
    // 1ª variável inicial
    // 2ª função para atualizar a variável
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'José Januário'
        });

        const project = response.data;

        setProjects([... projects, project]);
    };

    return (
        // Fragment (Container que envolve para não afetar na estilização)
        <>
            <Header title="Projects:"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;