import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import styled from 'styled-components';

const BODY=styled.div`
padding:20px;

  
`;
const BlogName=styled.h2`
 text-align: center


`;

const PostWritePage = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handlePostSubmit(e){
    e.preventDefault();

    if (!isLoading && titleRef.current && contentRef.current){
        const title = titleRef.current.value;
        const content = contentRef.current.value;
    


    setIsLoading(true);
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, }),
    })
      .then((res) => {
        if (res.ok) {
          alert('생성이 완료되었습니다!');
          navigate('/');
      setIsLoading(false);
        } else {
          alert('게시글 등록 실패');
          setIsLoading(false);
        }
      });
      
      }
    }
    
  return (
    <BODY>
      <div>
      <BlogName>소플의 미니 블로그</BlogName></div>
      <TextInput ref={titleRef} placeholder="제목을 입력하세요" />
      <TextInput ref={contentRef} placeholder="내용을 입력하세요"  style={{ height: '400px' }}/>
       <Button onClick={handlePostSubmit} >
       글 작성하기
      </Button>
    </BODY>
  );
};

export default PostWritePage;
