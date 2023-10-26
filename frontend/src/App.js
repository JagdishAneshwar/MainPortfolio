import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectDetailed from './pages/ProjectDetailed/ProjectDetailed';
import ProjectState from './Helper/Context/ProjectState'

function App() {
  return (
    <ProjectState>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Home' element={<HomePage />} />
          <Route exact path='/ProjectDetails' element={<ProjectDetailed />} />
        </Routes>
    </BrowserRouter>
    </ProjectState>
  );
}

export default App;
