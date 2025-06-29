import { Link } from "react-router-dom";

function PostListItem({ post, hasComment }) {
  return (
    <div>
      <Link key={post.id} to={`/post/${post.id}`}>
        <div>{post.title}</div>
        <div>{hasComment && post.content}</div>
      </Link>
    </div>
  );
}
export default PostListItem;
