import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About';


function App() {

  const[mode, setMode]= useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    
    <Router>
      <div className="app">
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text below" mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path='/about' element={<About></About>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
