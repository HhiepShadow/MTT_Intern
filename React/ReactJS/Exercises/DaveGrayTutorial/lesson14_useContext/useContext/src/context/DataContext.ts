import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { PostModel } from "../models/PostModel";

interface DataContextType {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: PostModel[];
  fetchError: string | null;
  isLoading: boolean;
  posts: PostModel[];
  setPosts: Dispatch<SetStateAction<PostModel[]>>;
}

export const DataContext = createContext<DataContextType>({
  search: "",
  setSearch: () => {},
  searchResults: [],
  fetchError: null,
  isLoading: false,
  posts: [],
  setPosts: () => {},
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<PostModel[]>([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts
      .filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      )
      .reverse();

    setSearchResults(filteredResults);
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
