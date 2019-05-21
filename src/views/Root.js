import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';
import WhoPage from './WhoPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/wszystkie-wpisy" component={WhoPage} />
      <Route path="/kim-jestem" component={WhoPage} />
    </Router>
  );
}

export default App;
