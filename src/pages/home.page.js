import React from 'react';

const HomePage = () => (
  <div>
    <div>
      <h1>No reactions to your Reddit posts?</h1>
      <p id="subtitle">
        Great timing, great results! Find the best time to post on your subreddit.
      </p>
      <div id="how-it-works">
        <h2>How It Works</h2>
        <ul>
          <li>
            We find the 500 top posts from the past year for a subreddit.
          </li>
          <li>
            The data is visualized in a heatmap grouped by weekday and hour of the day.
          </li>
          <li>
            See immediately when to submit your reddit post.
          </li>
        </ul>
      </div>
      <div id="about">
        <h2>About</h2>
        <p>
          This app was created during a course on profy.dev with the goal to implement a
          pixel-perfect real-world application with professional workflows and tools like Kanban,
          ClickUp, Figma, GitHub, pull requests and code reviews. Click here for more information.
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
