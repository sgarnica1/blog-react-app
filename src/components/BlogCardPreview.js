import { BlogCardPreviewStyled } from "./styled/BlogCardPreview.styled";
import { Link } from "react-router-dom";

function BlogCardPreview({ blog }) {
  const author = `${blog.author[0].toUpperCase()}${blog.author.slice(1)}`;

  return (
    <BlogCardPreviewStyled key={blog.id}>
      <Link to={`/blogs/${blog.id}`} className="blog-card-prev__link">
        <h3 className="blog-card-prev__title">{blog.title}</h3>
        <p className="blog-card-prev__author">By {author}</p>
      </Link>
    </BlogCardPreviewStyled>
  );
}

export { BlogCardPreview };
