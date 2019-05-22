import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';
import WhoPage from './WhoPage';
import PostPage from './PostPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/wszystkie-wpisy" component={WhoPage} />
      <Route path="/kim-jestem" component={WhoPage} />
      <Route path="/:postTitle" component={PostPage} />
    </Router>
  );
}

export default App;
