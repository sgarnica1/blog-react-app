import { useParams } from "react-router-dom";
import { useJsonServer } from "../hooks/useJsonServer";
import { BlogDetailsStyled } from "./styled/BlogDetails.styled";

function BlogDetails() {
  const { id } = useParams();
  const blogUrl = `http://localhost:8000/blogs/${id}`;
  const { data: blog, loading, error } = useJsonServer(blogUrl);

  return (
    <BlogDetailsStyled className="blog-details">
      {error && <p>Error</p>}
      {loading && !error && <p>Loading...</p>}
      {blog && !loading && !error && (
        <article className="blog-details__container">
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by: {blog.author}</p>
          <p className="blog-details__body">{blog.body}</p>
        </article>
      )}
    </BlogDetailsStyled>
  );
}

export { BlogDetails };
