import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as V from '../../styles/PostViewStyle';
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../db/data.json";

function PostViewPage(props) {
  const navigate = useNavigate();
  const { id } = useParams(); 


  console.log("PostViewPage: URL에서 가져온 id =", id); 
  console.log("PostViewPage: 숫자로 변환된 id =", Number(id));
  console.log("PostViewPage: 로드된 데이터(data) =", data);

  const [comment, setComment] = useState("");

  const post = data.find((item) => {
      return item.id === Number(id); 
  });

  console.log("PostViewPage: data.find로 찾은 post =", post);

  useEffect(() => {
    if (!post) {
      console.log("게시물을 찾을 수 없어 메인 페이지로 리디렉션합니다.");
      navigate("/");
    }
  }, [post, navigate]);

  if (!post) {
      return null;
  }

  return (
    <V.Wrapp>
      <V.Container>
        <Button
            title="뒤로 가기"
            onClick={() => {
                navigate("/");
            }}
        />
        <V.PostContainer>
            <V.Title>{post.title}</V.Title>
            <V.Content>{post.content}</V.Content>
        </V.PostContainer>

        <V.Comment>댓글</V.Comment>
        <CommentList comments={post.comments} />

        <TextInput
            height={40}
            value={comment}
            onChange={(event) => {
                setComment(event.target.value);
            }}
        />
        <Button
            title="댓글 작성하기"
            onClick={() => {
                navigate("/");
            }}
        />
      </V.Container>
    </V.Wrapp>
  );
}

export default PostViewPage;