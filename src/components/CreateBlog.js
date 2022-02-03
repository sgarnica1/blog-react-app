import { CreateBlogStyled } from "./styled/CreateBlog.styled";
import { CreateBlogForm } from "./CreateBlogForm";

function CreateBlog() {
  return (
    <CreateBlogStyled>
      <h2 className="title">Add a new blog</h2>
      <CreateBlogForm />
    </CreateBlogStyled>
  );
}

export { CreateBlog };
