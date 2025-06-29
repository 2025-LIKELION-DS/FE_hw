import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  BlogTitle,
  BlogForm,
  TitleInput,
  ContentInput,
  BlogButton,
} from "../style/postWritePageStyle"; 

function PostWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }

    if (!content) {
      alert("내용을 입력하세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: [],
    };

    const existing = JSON.parse(localStorage.getItem("posts") || "[]");
    localStorage.setItem("posts", JSON.stringify([newPost, ...existing]));

    alert("글이 작성되었습니다.");
    navigate("/");
  };

  return (
    <MainContainer>
      <BlogTitle href="/">소플의 미니 블로그</BlogTitle>
      <BlogForm onSubmit={handleSubmit}>
        <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <ContentInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <BlogButton type="submit">글 작성하기</BlogButton>
      </BlogForm>
    </MainContainer>
  );
}

export default PostWritePage;
