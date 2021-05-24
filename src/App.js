import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import HomePage from './pages/home.page';
import SearchPage from './pages/search.page';

import GlobalStyles from './styles/theme/globalstyles';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/javascript">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}
