import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Header from './components/header/header.component';
import GlobalStyles from './styles/theme/globalstyles';

import HomePage from './pages/home.page';
import SearchPage from './pages/search.page';

function App() {
  return (
    <Router>
      <Normalize />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search/javascript">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
