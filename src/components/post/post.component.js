import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import {
  PostContainer, Post, PostTitle, PostContent,
} from './post.styles';

const Posts = () => (
  <PostContainer>
    <Post id="how-it-works">
      <PostTitle>How it works</PostTitle>
      <PostContent>
        ∙ We find the 500 top posts from the past year for a subreddit.
        <br />
        ∙ The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        ∙ See immediately when to submit your reddit post.
      </PostContent>
    </Post>
    <Post id="about">
      <PostTitle>About</PostTitle>
      <PostContent>
        This app was created during a course on profy.dev with the goal to implement a
        <br />
        pixel-perfect real-world application with professional workflows and tools like Kanban,
        <br />
        ClickUp, Figma, GitHub, pull requests and code reviews. Click here for more information.
      </PostContent>
    </Post>
  </PostContainer>
);

export default Posts;
