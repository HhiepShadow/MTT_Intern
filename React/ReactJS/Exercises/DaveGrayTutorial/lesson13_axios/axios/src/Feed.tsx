import { PostModel } from "./models/PostModel";
import Post from "./Post";

const Feed = ({ posts }: { posts: PostModel[] }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
