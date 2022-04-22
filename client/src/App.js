import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './componnents/auth/Login';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename={'/' + process.env.PUBLIC_URL }>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Register} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default App;
