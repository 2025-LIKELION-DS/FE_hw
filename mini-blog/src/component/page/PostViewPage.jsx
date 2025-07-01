import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import BlogButton from "../list/Button";
import * as S from "../ui/Common.style";
import * as T from "../ui/TextInput.style";
import * as V from "../ui/PostViewPage.style";

export default function PostViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  // 게시글 데이터 불러오기
  const fetchPost = useCallback(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // 댓글 입력 핸들러
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // 댓글 작성 함수
  const submitComment = (e) => {
    e.preventDefault();
    if (isLoading || !post) return;

    const trimmedComment = comment.trim();
    if (!trimmedComment) {
      alert("댓글을 입력해주세요.");
      return;
    }

    setIsLoading(true);

    const updatedComments = [...post.comments, { id: Date.now(), content: trimmedComment }];

    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ comments: updatedComments }),
    })
      .then((res) => {
        if (res.ok) {
          alert("댓글이 작성되었습니다.");
          setComment(""); // 입력창 초기화
          fetchPost(); // 댓글 리스트 최신화
        }
      })
      .finally(() => setIsLoading(false));
  };

  // 댓글 삭제
  const handleCommentDelete = (commentId) => {
    const updatedComments = post.comments.filter((c) => c.id !== commentId);

    setIsLoading(true);
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ comments: updatedComments }),
    })
      .then((res) => {
        if (res.ok) {
          alert("댓글이 삭제되었습니다.");
          fetchPost(); // 최신 댓글 다시 불러오기
        }
      })
      .finally(() => setIsLoading(false));
  };

  // Enter 키로 댓글 작성
  const handleCommentKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitComment(e);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          alert("삭제되었습니다.");
          navigate("/");
        }
      });
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <S.MainContainer>
      <S.InnerContainer>
        <BlogButton label="뒤로 가기" onClick={handleBack} />

        <V.ContentContainer>
          <V.PostTitle>{post.title}</V.PostTitle>
          {post.content.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </V.ContentContainer>

        <V.ButtonContainer>
          <div style={{ fontWeight: 500 }}>댓글</div>
          <BlogButton label="삭제" onClick={handleDelete} />
        </V.ButtonContainer>

        <CommentList comments={post.comments} onDelete={handleCommentDelete} />

        <S.BlogForm>
          <T.CommentInput
            value={comment}
            onChange={handleCommentChange}
            onKeyDown={handleCommentKeyDown} // Enter 키 대응
            placeholder="댓글을 입력하세요"
          />
          <BlogButton label="댓글 작성하기" onClick={submitComment} />
        </S.BlogForm>
      </S.InnerContainer>
    </S.MainContainer>
  );
}
