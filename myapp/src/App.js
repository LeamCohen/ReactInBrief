import './App.css';
import Header from './components/Header.js';
import ModeToggler from './components/ModeToggler.js';
import { Routes, Route } from 'react-router-dom'; 
import About from './pages/About.js';
import Home from './pages/Home.js';
import { useState } from 'react';

function App() {
  const [logStatus, setLogStatus] = useState(false);
  
  return (
    <div className="App">
      <Header />
      {logStatus ? 
        <h1>user logged</h1> : 
        <h1>no user logged</h1>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
