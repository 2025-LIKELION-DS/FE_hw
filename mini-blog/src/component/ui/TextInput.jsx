import React from "react";

function TextInput({ value, onChange, placeholder, height }) {
  return (
    <input
      style={{ height: `${height}px`, width: "722px", marginTop: "8px" }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
export default TextInput;
