import styled from "styled-components";

const CreateBlogFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  .input-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.secondary};
    }

    input,
    textarea,
    select {
      padding: 10px;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.skeletonPrimary};
      transition: ease 0.5s;
      border-radius: 5px;
      resize: none;
    }

    input:focus,
    textarea:focus,
    select:focus {
      border: 1px solid ${({ theme }) => theme.colors.hover};
    }

    select {
      max-width: 300px;
    }
  }

  button {
    height: 50px;
    max-width: 300px;
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.header};
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export { CreateBlogFormStyled };
