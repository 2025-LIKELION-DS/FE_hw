import React from "react";
import PostListItem from "./PostListItem";
import * as P from '../../styles/PostListStyle';

function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <P.Wrapp>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </P.Wrapp>
  );
}
export default PostList;