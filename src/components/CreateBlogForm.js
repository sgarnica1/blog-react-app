import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateBlogFormStyled } from "./styled/CreateBlogForm.styled";
import { useBlogs } from "../contexts/BlogsContext";

function CreateBlogForm() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [author, setAuthor] = React.useState("mario");
  const [loading, setLoading] = React.useState(false);

  const { addBlog } = useBlogs();

  const apiUrl = "http://localhost:8000/blogs";
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const blog = {
      title,
      body,
      author,
    };

    setLoading(true);

    function callback() {
      setLoading(true);
      navigate("/");
    }

    addBlog(apiUrl, blog, callback);
  }

  return (
    <CreateBlogFormStyled onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Blog title</label>
        <input
          type="text"
          value={title}
          required
          placeholder="Your awesome title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label>Blog body</label>
        <textarea
          value={body}
          cols="30"
          rows="10"
          required
          placeholder="Your blog in here"
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="input-container">
        <label>Blog author</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      </div>
      <button type="submit">
        {!loading && "Add new blog"}
        {loading && "Adding new blog..."}
      </button>
    </CreateBlogFormStyled>
  );
}

export { CreateBlogForm };
