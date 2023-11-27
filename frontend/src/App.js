import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectDetail from './pages/ProjectDetail/ProjectDetailed';
import ProjectState from './Helper/Context/ProjectState'

function App() {
  return (
    <ProjectState>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Home' element={<HomePage />} />
          <Route exact path='/ProjectDetail' element={<ProjectDetail />} />
        </Routes>
    </BrowserRouter>
    </ProjectState>
  );
}

export default App;
