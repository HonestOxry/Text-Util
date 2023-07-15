/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from './components/Navbar';
import About from './components/About';
import Testform from './components/Testform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
  }
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001e3c';
      showAlert("Dark mode", "success");
      // to change the tiltle of page use document.title
      // document.title = "TestUtils-Dark Mode";         
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode", "success");
      // document.title = "TestUtils-Light Mode";         
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <About /> */}
          <Routes>
            <Route exact path="/" element={<Testform heading="Enter text" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          {/* <Testform heading="Enter text" showAlert={showAlert} mode={mode} /> */}
        </div>
      </Router>


    </>
  );
}
export default App;

