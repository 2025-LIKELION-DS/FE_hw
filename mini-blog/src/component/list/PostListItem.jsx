import { useNavigate } from "react-router-dom";
import * as P from "../ui/PostListItem.style";

export default function PostListItem({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <P.PostListContainer onClick={handleClick}>
      <P.PostList>{post.title}</P.PostList>
    </P.PostListContainer>
  );
}
