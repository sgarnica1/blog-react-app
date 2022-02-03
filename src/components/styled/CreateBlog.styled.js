import styled from "styled-components";

const CreateBlogStyled = styled.main`
  padding: 0 30px;
  margin: 80px 0;

  .title {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 30px;
  }

  @media (min-width: 768px) {
    & {
      padding: 0 200px;
    }
  }
`;

export { CreateBlogStyled };
