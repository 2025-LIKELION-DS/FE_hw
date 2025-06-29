import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import * as W from '../../styles/PostWriteStyle';

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
  <W.Wrapp>
    <W.Container>

      <TextInput
          height={20}
          value={title}
          onChange={(event) => {
              setTitle(event.target.value);
          }}
      />

      <TextInput
          height={480}
          value={content}
          onChange={(event) => {
              setContent(event.target.value);
          }}
      />

      <Button
          title="글 작성하기"
          onClick={() => {
              navigate("/");
          }}
      />
    </W.Container>
  </W.Wrapp>
  );
}

export default PostWritePage;