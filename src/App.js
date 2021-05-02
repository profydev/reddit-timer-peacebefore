import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/theme/globalstyles';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" render={() => null} />
        <Route exact path="/search" render={() => null} />
      </Switch>

      <h1>No reactions to your Reddit posts?</h1>
      <p>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
    </div>
  );
}
