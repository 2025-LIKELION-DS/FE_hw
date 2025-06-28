import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
