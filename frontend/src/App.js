import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectDetailed from './pages/ProjectDetailed/ProjectDetailed';
import { DataProvider } from './Helper/Context';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/ProjectDetails' element={<ProjectDetailed />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
