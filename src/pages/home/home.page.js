import React from 'react';
import Posts from '../../components/post/post.component';
import {
  Cover, Subtitle, ButtonStyle, JavascriptStyle, TableStyle,
} from './home.styles';

const HomePage = () => (
  <div>
    <div>
      <h1>No reactions to your reddit posts?</h1>
      <Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subtitle>
      <Cover>
        <ButtonStyle />
        <JavascriptStyle />
        <TableStyle />
      </Cover>
      <Posts />
    </div>
  </div>
);

export default HomePage;
