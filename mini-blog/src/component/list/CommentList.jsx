import React from "react";
import CommentListItem from "../list/CommentListltem";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
