import { Link, useParams } from "react-router-dom";
//import PostList from "../list/PostList";
import PostListItem from "../list/PostListltem";
import postData from "../../db/data.json";
import TextInput from "../ui/TextInput";
import { useState } from "react";
//import PostList from "../list/PostList";
import CommentList from "../list/CommentList";
import * as S from "../../styles/PostViewPageStyle";

function PostViewPage() {
  const { id } = useParams();
  const data = postData.find((post) => {
    return post.id === Number(id); //find는 참일때만
  });
  //console.log(data);  해서 undefind 안 나나 확인
  const [writeComment, setWriteComment] = useState("");

  return (
    <div>
      <Link to="/">
        <button>뒤로가기</button>
      </Link>
      <S.postlistitem>
        <PostListItem post={data} hasComment={true} />
      </S.postlistitem>
      <S.viewComment>댓글</S.viewComment>
      <CommentList comments={data.comments}></CommentList>
      <TextInput
        height={"50"}
        value={writeComment}
        onChange={(e) => setWriteComment(e.target.value)}
        placeholder="댓글 작성"
      ></TextInput>
      <Link to="/">
        <S.viweButton>댓글 작성하기</S.viweButton>
      </Link>
    </div>
  );
}
export default PostViewPage;
