import styled from "styled-components";

const ErrorLoadingStyled = styled.section`
  .error__title {
    margin-top: 30px;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.error}
  }
`;

export { ErrorLoadingStyled };
