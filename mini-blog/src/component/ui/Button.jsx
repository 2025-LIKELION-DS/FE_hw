import styled from "styled-components";
import React from 'react';

const BUTTON = styled.button`
background-color : gainsboro;
width:150px;
height:40px;
font-size : 20px;
border-radius: 10px;
border:gray;
cursor: pointer;
`;

export default function Button ({children,onClick}){
    return(
<BUTTON onClick={onClick}>
    {children}
</BUTTON>

    );
}
