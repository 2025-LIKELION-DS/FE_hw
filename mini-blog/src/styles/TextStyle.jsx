import styled from 'styled-components';

export const StyleText = styled.textarea`
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  &:focus {
  outline: none;
  }
  height: 40px;
  width : calc(100% - 32px);
  margin-top: 16px;
`;