import React from 'react';
import Header from '../components/header/header.component';

const HomePage = () => (
  <div>
    <Header />
    <div>
      <h1>No reactions to your Reddit posts?</h1>
      <p>
        Great timing, great results! Find the best time to post on your subreddit.
      </p>
      <div id="how-it-works">
        <p>How It Works</p>
      </div>
      <div id="about">
        <p>About</p>
      </div>
    </div>
  </div>
);

export default HomePage;
