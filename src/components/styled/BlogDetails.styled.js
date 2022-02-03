import styled from "styled-components";

const BlogDetailsStyled = styled.main`
  padding: 0 30px;
  margin: 80px 0;

  .blog-details__title {
    font-size: 30px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .blog-details__author {
    font-size: 15px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.hover};
  }

  .blog-details__body {
    font-size: 16px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: justify;
  }

  .blog-details__delete {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: 20px;
    }

    .blog-details__delete-form {
      display: flex;
      align-items: center;

      input {
        height: 40px;
        padding: 10px;
        border-radius: 5px 0 0 5px;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        outline: none;
      }
      input:focus {
        border-color: ${({ theme }) => theme.colors.error};
      }

      .blog-details__delete-btn {
        height: 40px;
        padding: 0 20px;
        background-color: ${({ theme }) => theme.colors.error};
        color: ${({ theme }) => theme.colors.header};
        outline: none;
        border: none;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }

      .blog-details__delete-btn.disable {
        opacity: 0.6;
      }

      .blog-details__delete-btn.disable:hover {
        box-shadow: none;
        cursor: auto;
      }

      .blog-details__delete-btn:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }

  @media (min-width: 768px) {
    & {
      padding: 0 200px;
    }
  }
`;

export { BlogDetailsStyled };
