import styled from "styled-components";

const BlogCardPreviewStyled = styled.li`
  padding: 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.hover};
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.25);
  }

  .blog-card-prev__link {
    text-decoration: none;
  }

  .blog-card-prev__title {
    color: ${({ theme }) => theme.colors.hover};
    font-size: 22px;
    margin-bottom: 10px;
  }

  .blog-card-prev__author {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { BlogCardPreviewStyled };
