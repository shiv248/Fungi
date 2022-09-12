import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/signUp';
import About from './pages/About/About';
//import { ReactComponent as YourSvg } from './resources/images/logo.svg';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
