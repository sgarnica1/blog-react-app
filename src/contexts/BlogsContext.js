import React from "react";
import { useJsonServer } from "../hooks/useJsonServer";

const BlogsContext = React.createContext();

function useBlogs() {
  return React.useContext(BlogsContext);
}

function BlogsProvider({ children }) {
  const apiUrl = "http://localhost:8000/blogs";
  const { data: blogs, setData: setBlogs, loading, error } = useJsonServer(apiUrl);
  

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs, loading, error }}>
      {blogs && children}
    </BlogsContext.Provider>
  );
}

export { useBlogs, BlogsProvider };
