import React from "react";
import { HomeStyled } from "./styled/Home.styled";
import { BlogList } from "./BlogList";
import { useBlogs } from "../contexts/BlogsContext";
import { BlogCardPreview } from "./BlogCardPreview";
import { BlogCardPreviewLoading } from "./BlogCardPreviewLoading";
import { ErrorLoading } from "./ErrorLoading";

function Home({ children }) {
  const { blogs, loading, error } = useBlogs();

  return (
    <HomeStyled>
      <div className="home-container">
        <h2>Recent Posts</h2>
        <BlogList>
          {!!error && <ErrorLoading />}
          {!error &&
            loading &&
            new Array(4)
              .fill()
              .map((item, index) => <BlogCardPreviewLoading key={index} />)}
          {!error &&
            !loading &&
            blogs &&
            blogs.map((blog) => <BlogCardPreview blog={blog} key={blog.id} />)}
        </BlogList>
      </div>
    </HomeStyled>
  );
}

export { Home };
