import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostModel } from "./models/PostModel";
import { DataContext } from "./context/DataContext";

const EditPost = () => {
  const {
    posts,
    handleUpdate,
    postEditTitle,
    setPostEditTitle,
    postEditBody,
    setPostEditBody,
  } = useContext(DataContext);
  const { id } = useParams();
  const post: PostModel = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setPostEditTitle(post.title);
      setPostEditBody(post.body);
    }
  }, [post, setPostEditTitle, setPostEditBody]);

  return (
    <div className="NewPost">
      {postEditTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={postEditTitle}
              onChange={(e) => setPostEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={postEditBody}
              onChange={(e) => setPostEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleUpdate(post.id)}>
              Edit
            </button>
          </form>
        </>
      )}
      {!postEditTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disapointing</p>
          <p>
            <Link to="/">Go back to Home Page</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default EditPost;
