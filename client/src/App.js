import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename={'/' + process.env.PUBLIC_URL }>
        <div className="App">
          <Navbar />
          <Landing />
        </div>
      </Router>
    );
  }
};

export default App;
