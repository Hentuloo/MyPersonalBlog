import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import MainPage from './MainPage';
import WhoPage from './WhoPage';
import PostPage from './PostPage';
import AllPostsPage from './AllPostsPage';
import SearchPage from './SearchPage';
import BooksPage from './BooksPage';
import RegulationsPage from './RegulationsPage';
import LevelsPage from './LevelsPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/kim-jestem" component={WhoPage} />
          <Route exact path="/wszystkie-wpisy" component={AllPostsPage} />
          <Route exact path="/ksiazki" component={BooksPage} />
          <Route exact path="/regulamin" component={RegulationsPage} />
          <Route exact path="/trzy-poziomy" component={LevelsPage} />
          <Route path="/szukaj/:like" component={SearchPage} />
          <Route path="/:postTitle" component={PostPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
