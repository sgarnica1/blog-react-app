import styled from "styled-components";

const BlogListStyled = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin: 15px 0;
  gap: 20px;
`;

export { BlogListStyled };
