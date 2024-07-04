import { Link } from "react-router-dom";
import { PostModel } from "./models/PostModel";

const Post = ({ post }: {post: PostModel}) => {
  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime.toString()}</p>
      </Link>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
