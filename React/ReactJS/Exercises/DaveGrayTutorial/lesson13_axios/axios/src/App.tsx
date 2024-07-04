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
import api from "./api/posts";
import { AxiosError } from "axios";
import EditPost from "./EditPost";

function App() {
  const [posts, setPosts] = useState<PostModel[]>(data);

  // Search:
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<PostModel[]>([]);

  // Post:
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");

  // Edit:
  const [postEditTitle, setPostEditTitle] = useState<string>('');
  const [postEditBody, setPostEditBody] = useState<string>('');

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

  // Axios API:
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log(err.message);
          }
        } else {
          console.log(err);
        }
      }
    };

    fetchPosts();
  }, []);

  // Handle submit:
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const id: number = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy, pp");
    const newPost: PostModel = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };

    // POST API:
    try {
      const response = await api.post("/posts", newPost);
      const newListPosts: PostModel[] = [...posts, response.data];

      setPosts(newListPosts);
      setPostTitle("");
      setPostBody("");
      navigation("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }
      } else {
        console.log(err);
      }
    }
  };

  // PUT-PATCH API:
  const handleUpdate = async (id: number) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {
      id,
      title: postEditTitle,
      datetime,
      body: postEditBody
    };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post: PostModel) => post.id === id ? { ...response.data } : post));
      setPostEditTitle('');
      setPostEditBody('');
      navigation('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }
      } else {
        console.log(err);
      }
    }
  }

  // DELETE API:
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigation("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
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
        <Route path="edit/:id">
          <Route
            index
            element={
              <EditPost
                posts={posts}
                handleUpdate={handleUpdate}
                postEditBody={postEditBody}
                postEditTitle={postEditTitle}
                setPostEditBody={setPostEditBody}
                setPostEditTitle={setPostEditTitle}
              />
            }
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
