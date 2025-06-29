import React from "react";

function Button({ text, onClick, type = "button", style = {} }) {
return (
    <button type={type} onClick={onClick} className="custom-btn" style={style}>
    {text}
    </button>
);
}

export default Button;
