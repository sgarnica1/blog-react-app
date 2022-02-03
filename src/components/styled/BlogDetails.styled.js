import styled from "styled-components";

const BlogDetailsStyled = styled.main`
  padding: 0 30px;
  margin: 80px 0 30px 0;

  .blog-details__title {
    font-size: 30px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.colors.secondary}
  }

  .blog-details__author {
    font-size: 15px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.colors.hover}
  }

  .blog-details__body{
    font-size: 16px;
    line-height: 30px;
    color: ${({theme}) => theme.colors.secondary}
  }

  @media (min-width: 768px) {
    & {
      padding: 0 200px;
    }
  }
`;

export { BlogDetailsStyled };
