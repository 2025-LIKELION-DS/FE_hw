import { Link } from "react-router-dom";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import * as S from "../../styles/PostWritePageStyle";

function PostWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <S.writeTitle>소플의 미니 블로그</S.writeTitle>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목 작성"
        height={"40"}
      ></TextInput>
      <TextInput
        height={"400"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="글 작성"
      ></TextInput>
      <Link to="/">
        <S.writeButton>글 작성하기</S.writeButton>
      </Link>
    </div>
  );
}

export default PostWritePage;
