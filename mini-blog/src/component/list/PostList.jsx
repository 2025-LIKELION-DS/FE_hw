//import { Link } from "react-router-dom";
import postData from "../../db/data.json";
import PostListItem from "./PostListltem";
import * as S from "../../styles/PostListStyle";

function PostList() {
  return (
    <>
      {postData.map((post) => {
        return (
          <S.postListContent>
            <PostListItem key={post.id} post={post} hasComment={false} />
          </S.postListContent>
        );
      })}
    </>
  );
}
export default PostList;
