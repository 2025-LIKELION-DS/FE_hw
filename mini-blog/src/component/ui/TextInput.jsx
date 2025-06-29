import styled from "styled-components";
import React, { forwardRef } from 'react';

const TEXTINPUT = styled.textarea`
width:100%;  resize: none;
height:50px;
`;
const TextInput = forwardRef((props, ref) => {
    return <TEXTINPUT ref={ref} {...props} />;
  });
  
  export default TextInput;