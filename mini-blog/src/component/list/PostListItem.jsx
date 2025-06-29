import React from "react";
import * as L from '../../styles/ListItemStyle';

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <L.Wrapp onClick={onClick}>
      <L.Title>{post.title}</L.Title>
    </L.Wrapp>
  );
}

export default PostListItem;