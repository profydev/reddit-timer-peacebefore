import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles/theme/globalstyles';
import theme from './styles/theme';
import Header from './components/header/header.component';

import HomePage from './pages/home/home.page';
import SearchPage from './pages/search.page';
import TermsPage from './pages/terms.page';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
