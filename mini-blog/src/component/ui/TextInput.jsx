import React from "react";
import * as T from '../../styles/TextStyle';

function TextInput(props){
  const { height, value, onChange } = props;
  return <T.StyleText onChange={onChange} height={height} value={value}></T.StyleText>;
}

export default TextInput;