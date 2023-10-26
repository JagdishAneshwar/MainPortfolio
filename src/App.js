import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import ProjectDetailed from './pages/ProjectDetailed/ProjectDetailed'

function App() {
  return (
    <BrowserRouter> 
        <Routes> 
                <Route exact path='/' element={< HomePage />}></Route> 
                <Route exact path='/ProjectDetails' element={< ProjectDetailed />}></Route> 
        </Routes> 
    </BrowserRouter> 
  );
};

export default App;
