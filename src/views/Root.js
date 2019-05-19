import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/wszystkie-wpisy" component={MainPage} />
    </Router>
  );
}

export default App;
