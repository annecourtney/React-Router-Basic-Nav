import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation/>
    <Route exact path="/" components={Home}></Route>
    <Route path="/About" components={About}></Route>
    <Route path="/Contact" components={Navigation}></Route>
  </div>
);

export default App;
