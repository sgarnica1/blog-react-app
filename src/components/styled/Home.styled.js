import styled from "styled-components";

const HomeStyled = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 50px;

  .home-container {
    padding: 30px 20px;
  }

  @media (min-width: 768px) {
    & {
      padding: 30px 100px;
    }
  }
`;

export { HomeStyled };
