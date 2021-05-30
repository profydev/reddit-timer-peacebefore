import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Header from './components/header/header.component';
import GlobalStyles from './styles/theme/globalstyles';

<<<<<<< HEAD
import HomePage from './pages/home/home.page';
import SearchPage from './pages/search.page';
import TermsPage from './pages/terms.page';
import Footer from './components/footer/footer.component';
=======
import HomePage from './pages/home.page';
import SearchPage from './pages/search.page';
>>>>>>> 2553374f6fa1d627501b1dff25d3a3a11381881f

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
<<<<<<< HEAD
        <Route exact path="/terms">
          <TermsPage />
        </Route>
      </Switch>
      <Footer />
=======
      </Switch>
>>>>>>> 2553374f6fa1d627501b1dff25d3a3a11381881f
    </Router>
  );
}

export default App;
