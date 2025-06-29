// PostViewPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import data from "../db/data.json";
import {
  Container,
  BackButton,
  PostBox,
  CommentList,
  CommentItem,
  CommentTextArea,
  SubmitButton
} from "../style/commentListItemStyle";

function PostViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const commentRef = useRef();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("posts")) || [];    
    const combined = [...data, ...stored];
    const found = combined.find((item) => item.id === Number(id));
    setPost(found);

    if (found && found.comments) {
    setComments(found.comments);  
  }
  }, [id]);

  const handleCommentSubmit = () => {
    const content = commentRef.current.value.trim();
    if (!content) return alert("댓글을 입력하세요.");

    const newComment = {
      id: Date.now(),
      content,
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    commentRef.current.value = "";
  };

  if (!post) {
    return (
      <Container>
        <h2>게시글을 찾을 수 없습니다.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>뒤로 가기</BackButton>

      <PostBox>
        <h2>{post.title}</h2>
        {post.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </PostBox>

      <h3>댓글</h3>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>{comment.content}</CommentItem>
        ))}
      </CommentList>

      <CommentTextArea ref={commentRef} placeholder="댓글을 입력하세요..." />
      <SubmitButton onClick={handleCommentSubmit}>댓글 작성하기</SubmitButton>
    </Container>
  );
}

export default PostViewPage;
