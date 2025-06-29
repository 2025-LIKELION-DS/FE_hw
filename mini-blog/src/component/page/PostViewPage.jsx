import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummy from '../../db/data.json';
import Button from '../ui/Button';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';

const DIV =styled.div`
padding : 40px;
`;
const UI =styled.ul`
display :flex;
flex-direction: column;
  padding-left: 0;
  margin-left: 0;

`;
const CONTENT = styled.div`
border: 1px solid gray;
border-radius:10px;
padding:10px 0 10px 20px;
margin-top:20px;
`;

const LI=styled.li`
list-style: none; 
border: 1px solid gray;
padding:10px;
border-radius:10px;
margin-top:5px;
   
`;
const PostViewPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const commentRef = useRef(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const foundPost = dummy.posts.find(p => String(p.id) === postId);
    if (foundPost) setPost(foundPost);
    else setPost(null);
  }, [postId]);

  const handleAddComment = () => {
    if (isAdding) return;
    if (!post) return;

    const commentValue = commentRef.current?.value.trim();
    if (!commentValue) return;

    setIsAdding(true);

    const newComment = {
      id: Date.now(),
      content: commentValue,
    };

    const updatedComments = post.comments ? [...post.comments, newComment] : [newComment];
    const updatedPost = { ...post, comments: updatedComments };
    setPost(updatedPost);

    commentRef.current.value = ''; 
    setIsAdding(false);
  };

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <DIV>
      <Button onClick={() => navigate('/')}>뒤로가기</Button>

      <CONTENT>
        <h1>{post.title}</h1>
        <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
      </CONTENT>

      <h2>댓글</h2>
      <UI>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map(c => <LI key={c.id}>{c.content}</LI>)
        ) : (
          <LI>아직 댓글이 없습니다.</LI>
        )}
      </UI>

      <TextInput ref={commentRef} placeholder="댓글을 입력하세요" />
      <br />
      <Button onClick={handleAddComment}>댓글 작성하기</Button>
    </DIV>
  );
};

export default PostViewPage;
