import styled from "styled-components";

const BlogCardPreviewLoadingStyled = styled.li`
  padding: 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.skeletonPrimary};
  min-height: 100px;

  .blog-card-prev__title {
    background-color: ${({ theme }) => theme.colors.skeletonSecondary};
    width: 80%;
    height: 10px;
    margin-bottom: 18px;
  }

  .blog-card-prev__author {
    background-color: ${({ theme }) => theme.colors.skeletonSecondary};
    width: 50%;
    height: 10px;
    margin-bottom: 10px;
  }
  .blog-card-prev__author:last-of-type {
    width: 40%;
  }

  .blog-card-prev__title,
  .blog-card-prev__author {
    background: linear-gradient(
        0.25turn,
        transparent,
        ${({ theme }) => theme.colors.background},
        transparent
      ),
      linear-gradient(
        ${({ theme }) => theme.colors.skeletonSecondary},
        ${({ theme }) => theme.colors.skeletonSecondary}
      ),
      radial-gradient(
        38px circle at 19px 19px,
        ${({ theme }) => theme.colors.skeletonSecondary} 50%,
        transparent 51%
      ),
      linear-gradient(
        ${({ theme }) => theme.colors.skeletonSecondary},
        ${({ theme }) => theme.colors.skeletonSecondary}
      );
    background-repeat: no-repeat;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;

export { BlogCardPreviewLoadingStyled };
