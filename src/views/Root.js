import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import MainPage from './MainPage';
import WhoPage from './WhoPage';
import PostPage from './PostPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wszystkie-wpisy" component={WhoPage} />
          <Route exact path="/kim-jestem" component={WhoPage} />
          <Route path="/:postTitle" component={PostPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
