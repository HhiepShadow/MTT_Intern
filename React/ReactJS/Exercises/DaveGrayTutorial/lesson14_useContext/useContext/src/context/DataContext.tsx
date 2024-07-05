import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FormEventHandler,
} from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { PostModel } from "../models/PostModel";
import { useNavigate } from "react-router-dom";
import { dataPosts } from "../data";
import { format } from "date-fns";
import api from "../api/posts";
import { AxiosError } from "axios";
import useWindowSize from "../hooks/useWindowSize";

interface DataContextType {
  width: number;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResult: PostModel[];
  fetchError: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  postTitle: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  postBody: string;
  setPostBody: Dispatch<SetStateAction<string>>;
  posts: PostModel[];
  handleUpdate: (id: number) => void;
  postEditTitle: string;
  setPostEditTitle: Dispatch<SetStateAction<string>>;
  postEditBody: string;
  setPostEditBody: Dispatch<SetStateAction<string>>;
  handleDelete: (id: number) => void
}

export const DataContext = createContext<DataContextType>({
  width: 0,
  search: "",
  setSearch: () => {},
  searchResult: [],
  fetchError: "",
  isLoading: true,
  handleSubmit: () => {},
  postTitle: "",
  setPostTitle: () => {},
  postBody: "",
  setPostBody: () => {},
  posts: [],
  handleUpdate: () => {},
  postEditTitle: "",
  setPostEditTitle: () => {},
  postEditBody: "",
  setPostEditBody: () => { },
  handleDelete: () => {}
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostModel[]>(dataPosts);

  // Search:
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<PostModel[]>([]);

  // Post:
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");

  // Edit:
  const [postEditTitle, setPostEditTitle] = useState<string>("");
  const [postEditBody, setPostEditBody] = useState<string>("");

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:5000/posts"
  );

  const { width } = useWindowSize();

  // Navigation:
  const navigation = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults);
  }, [posts, search]);

  // Handle submit:
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const id: number = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime: string = format(new Date(), "MMMM dd, yyyy, pp");
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
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: postEditTitle,
      datetime,
      body: postEditBody,
    };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post: PostModel) =>
          post.id === id ? { ...response.data } : post
        )
      );
      setPostEditTitle("");
      setPostEditBody("");
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
    <DataContext.Provider
      value={{
        width,
        search,
        setSearch,
        searchResult,
        fetchError,
        isLoading,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        posts,
        handleUpdate,
        postEditTitle,
        setPostEditTitle,
        postEditBody,
        setPostEditBody,
        handleDelete
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
