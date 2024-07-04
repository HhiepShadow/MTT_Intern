import React from 'react'
import Feed from './Feed';
import { PostModel } from './models/PostModel';

const Home = ({ posts, fetchError, isLoading }: {
  posts: PostModel[],
  fetchError: string
  isLoading: boolean
}) => {
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No posts to display.</p>
        ))}
    </main>
  );
};

export default Home