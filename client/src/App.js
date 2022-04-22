import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render() {
    console.log("process.env.PUBLIC_URL:", process.env.PUBLIC_URL);
    return (
      <Router basename={'/' + process.env.PUBLIC_URL }>
        <div className="App">
          <Navbar />
          <Routes>
            <Route  path="/" element={<Landing />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default App;
