import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';

const App: React.FC = () => (
  <Router>
    <switch>
      <Route path="/" component={Home} />
    </switch>
  </Router>
);

export default App;
