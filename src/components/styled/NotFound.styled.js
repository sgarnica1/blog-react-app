import styled from "styled-components";

const NotFoundStyled = styled.main`
  padding: 0 30px;
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    margin-top: 100px;
    color: ${({ theme }) => theme.colors.hover};
    font-size: 80px;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 20px;
    font-size: 22px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    max-width: 300px;
    padding: 0 20px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.header};
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  a:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    & {
      padding: 0 200px;
    }
  }
`;

export { NotFoundStyled };
