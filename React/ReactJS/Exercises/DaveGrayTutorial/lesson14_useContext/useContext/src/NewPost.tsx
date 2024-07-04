import React, { SetStateAction, Dispatch, FormEventHandler } from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}: {
    handleSubmit: FormEventHandler<HTMLFormElement>,
    postTitle: string, 
    postBody: string, 
    setPostTitle: Dispatch<SetStateAction<string>>
    setPostBody: Dispatch<SetStateAction<string>>
}) => {
  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
