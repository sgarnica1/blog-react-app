import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJsonServer } from "../hooks/useJsonServer";
import { BlogDetailsStyled } from "./styled/BlogDetails.styled";

function BlogDetails() {
  const { id } = useParams();
  const blogUrl = `http://localhost:8000/blogs/${id}`;
  const { data: blog, loading, error } = useJsonServer(blogUrl);

  const [disableDelete, setDisableDelete] = React.useState(true);
  const navigate = useNavigate();

  function handleDeleteValidation(event) {
    if (event.target.value === blog.title) {
      setDisableDelete(false);
    }
  }

  function handleDelete() {
    fetch(blogUrl, { method: "DELETE" })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BlogDetailsStyled className="blog-details">
      {error && <p>Error</p>}
      {loading && !error && <p>Loading...</p>}
      {blog && !loading && !error && (
        <article className="blog-details__container">
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by: {blog.author}</p>
          <p className="blog-details__body">{blog.body}</p>
          <div className="blog-details__delete">
            <p>Write the blog's title to delete this blog</p>
            <div className="blog-details__delete-form">
              <input type="text" onChange={handleDeleteValidation} />
              <button
                className={`blog-details__delete-btn ${
                  disableDelete && "disable"
                }`}
                disabled={disableDelete}
                onClick={handleDelete}
              >
                Delete blog
              </button>
            </div>
          </div>
        </article>
      )}
    </BlogDetailsStyled>
  );
}

export { BlogDetails };
