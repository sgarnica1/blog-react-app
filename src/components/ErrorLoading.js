import { ErrorLoadingStyled } from "./styled/ErrorLoading.styled";

function ErrorLoading() {
  return (
    <ErrorLoadingStyled>
      <h2 className="error__title">Error loading blogs</h2>
    </ErrorLoadingStyled>
  );
}

export { ErrorLoading };
