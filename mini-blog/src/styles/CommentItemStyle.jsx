import styled from "styled-components";

export const Wrapp = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;

`;

export const Content = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;