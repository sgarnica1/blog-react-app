import styled from "styled-components";

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .navbar__logo {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.headers};
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
  }

  .navbar__links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .navbar__link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    margin-right: 20px;
  }
  
  .navbar__link.active {
    color: ${({ theme }) => theme.colors.hover};
  }

  .navbar__link:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  @media (min-width: 768px) {
    & {
      padding: 0 100px;
    }
  }
`;

export { NavStyled };
