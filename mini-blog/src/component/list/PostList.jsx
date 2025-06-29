
import dummy from '../../db/data.json';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, use } from 'react';
import styled from 'styled-components';


const TITLE=styled.p`
cursor: pointer;

border:1px solid gray;
padding: 20px;
border-radius:10px;
margin-bottom:2px;

`;

const LI=styled.li`
list-style: none;    
`;
const UI =styled.ul`
display :flex;
flex-direction: column;
  padding-left: 0;
  margin-left: 0;

`;

const PostList = () => {
console.log(dummy);
const navigate = useNavigate();
const[posts,setposts] =useState([]);


useEffect(()=>{
  fetch("http://localhost:3001/posts")
  .then((res)=>res.json())
  .then((data)=>setposts(data));
},[]);

  return (

    <UI>
      {dummy.posts.map((post) => (
        <LI key={post.id}
        onClick={() => navigate(`/view/${post.id}`)}>
          
          <TITLE>{post.title}</TITLE>
        </LI>
     ) )}
    </UI>


  );
}

export default PostList;
