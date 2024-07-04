import React from 'react'
import Feed from './Feed';
import { PostModel } from './models/PostModel';

const Home = ({ posts }: {posts: PostModel[]}) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home