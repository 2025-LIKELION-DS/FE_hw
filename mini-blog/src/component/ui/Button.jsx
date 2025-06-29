import React from "react";
import * as B from '../../styles/ButtonStyle';

function Button(props){
  const { title, onClick } = props;
  return <B.StyleButton onClick={onClick}>{title || "button"}</B.StyleButton>;
}

export default Button;