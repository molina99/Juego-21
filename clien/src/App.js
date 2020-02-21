import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Mesa from './components/mesa';

import './index.css';



function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Mesa} />
      </BrowserRouter>
  );
}

export default App;
