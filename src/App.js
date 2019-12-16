import './App.css';

import { About, Contact, Home, Navigation } from './components';

import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/About">
    <About/>
    </Route>
    <Route path="/Contact">
    <Contact/>
    </Route>
  </div>
);

export default App;
