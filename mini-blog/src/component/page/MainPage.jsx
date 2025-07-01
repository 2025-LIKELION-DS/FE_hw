import { useNavigate } from "react-router-dom";
import BlogButton from "../list/Button";
import PostList from "../list/PostList";
import * as S from "../ui/Common.style";

export default function MainPage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <S.MainContainer>
      <S.BlogTitle onClick={() => handleClick("/")}>소플의 미니 블로그</S.BlogTitle>
      <S.InnerContainer>
        <BlogButton label="글 작성하기" onClick={() => handleClick("/write")} />
        <PostList />
      </S.InnerContainer>
    </S.MainContainer>
  );
}
