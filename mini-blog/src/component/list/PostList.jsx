import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import * as S from "../ui/Common.style";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <S.ListContainer>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </S.ListContainer>
  );
}
