import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Header from './components/header/header.component';
import GlobalStyles from './styles/theme/globalstyles';

import HomePage from './pages/home/home.page';
import SearchPage from './pages/search.page';
import TermsPage from './pages/terms.page';
import Footer from './components/footer/footer.component';

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
        <Route exact path="/terms">
          <TermsPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
