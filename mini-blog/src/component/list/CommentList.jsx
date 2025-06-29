import React from "react";
import CommentListItem from "./CommentListItem";
import * as C from '../../styles/CommentStyle';

function CommentList(props) {
  const { comments } = props;

  return (
    <C.Wrapp>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </C.Wrapp>
  );
}

export default CommentList;