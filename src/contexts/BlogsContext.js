import React from "react";
import { useJsonServer } from "../hooks/useJsonServer";

const BlogsContext = React.createContext();

function useBlogs() {
  return React.useContext(BlogsContext);
}

function BlogsProvider({ children }) {
  const apiUrl = "http://localhost:8000/blogs";
  const { data: blogs, loading, error } = useJsonServer(apiUrl);

  function addBlog(endpoint, blog, callback) {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      callback();
    });
  }

  return (
    <BlogsContext.Provider value={{ blogs, loading, error, addBlog }}>
      {blogs && children}
    </BlogsContext.Provider>
  );
}

export { useBlogs, BlogsProvider };
