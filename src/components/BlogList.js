import React from "react";
import { BlogListStyled } from "./styled/BlogList.styled";

function BlogList({ children }) {
  return <BlogListStyled className="blog-list">{children}</BlogListStyled>;
}

export { BlogList };
