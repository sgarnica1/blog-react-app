import { Link } from "react-router-dom";
import { NotFoundStyled } from "./styled/NotFound.styled";

function NotFound() {
  return (
    <NotFoundStyled>
      <h2>Sorry...</h2>
      <p>That page cannot be found</p>
      <Link to="/">Return to homepage</Link>
    </NotFoundStyled>
  );
}

export { NotFound };
