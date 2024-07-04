import "./App.css";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { data } from "./data";
import { PostModel } from "./models/PostModel";
import { FormEventHandler, useEffect, useState } from "react";
import Layout from "./layout/Layout";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState<PostModel[]>(data);

  // Search:
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<PostModel[]>([]);

  // Post:
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");

  // Navigation:
  const navigation = useNavigate();

  useEffect(() => {
    const filteredResults: PostModel[] = posts.filter(
      (post: PostModel) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults);
  }, [posts, search]);

  // Handle submit:
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const id: number = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy, pp");
    const newPost: PostModel = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };

    const newListPosts: PostModel[] = [...posts, newPost];
    setPosts(newListPosts);
    setPostTitle("");
    setPostBody("");
    navigation("/");
  };

  const handleDelete = (id: number): void => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigation("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch}/>}>
        <Route index element={<Home posts={searchResult} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postBody={postBody}
                postTitle={postTitle}
                setPostBody={setPostBody}
                setPostTitle={setPostTitle}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
