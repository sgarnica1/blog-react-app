import styled from "styled-components"

const HomeBanner = styled.section`
  width: 100%;
  height: 100vh;
  background: url("https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  h2 {
    color: white;
    font-size: 50px;
  }
`

export {HomeBanner}