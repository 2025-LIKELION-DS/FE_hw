import React from 'react';
import PostList from '../list/PostList';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import styled  from 'styled-components';
const DIV = styled.div`
margin:40px;
`;
const BlogName=styled.h1`
 text-align: center;
`;

const MainPage = () => {
    const navigate = useNavigate();

    
    return (
    
      <DIV>
            <Button  onClick={() => navigate(`/write`)}>글 작성하기</Button>
        <BlogName>소플의 미니 블로그</BlogName>
        <PostList />
      </DIV>
    );
  };

export default MainPage;
