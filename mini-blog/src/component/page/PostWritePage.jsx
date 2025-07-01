import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../ui/Common.style";
import * as T from "../ui/TextInput.style";
import BlogButton from "../list/Button";

export default function PostWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (isLoading) return;

    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    setIsLoading(true);

    fetch(`http://localhost:3001/posts/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        comments: [],
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("글이 작성되었습니다.");
          navigate("/");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <S.MainContainer>
      <S.BlogTitle onClick={() => navigate("/")}>소플의 미니 블로그</S.BlogTitle>
      <S.BlogForm>
        <T.TitleInput value={title} onChange={handleTitleChange} />
        <T.ContentInput value={content} onChange={handleContentChange} />
        <BlogButton label="글 작성하기" onClick={onSubmit} />
      </S.BlogForm>
    </S.MainContainer>
  );
}
