import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </Router>
      <h1 className="text-light">HELLO WORLD</h1>
    </div>
  );
}

export default App;
