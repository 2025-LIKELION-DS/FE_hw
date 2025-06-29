import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 130px;
  background: silver;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  border: none;
  margin-top: 10px;
  &:hover {
    background: rgb(207, 207, 207);
    cursor: pointer;
  }
`;

export default Button;
