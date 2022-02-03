import { Link } from "react-router-dom";
import { NavStyled } from "./styled/Navbar.styled";

function Navbar() {
  return (
    <NavStyled>
      <Link to="/" className="navbar__logo">Foodblog</Link>
      <div className="navbar__links-container">
        <Link to="/" className="navbar__link active">
          Home
        </Link>
        <Link to="/create" className="navbar__link">
          New blog
        </Link>
        <Link to="/contact" className="navbar__link">
          Contact
        </Link>
      </div>
    </NavStyled>
  );
}

export { Navbar };
