import { Box } from '../style/postListItemStyle';

function PostListItem({ post }) {

  return (
    <Box>
      {post.title}
      {/* {post.content} */}
    </Box>
  );
}

export default PostListItem;
