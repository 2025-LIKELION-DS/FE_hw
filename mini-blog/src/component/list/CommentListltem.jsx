import React from "react";
import * as S from "../../styles/CommentListItemStyle";

function CommentListItem({ comment }) {
  if (!comment) return null;

  return (
    <>
      <S.commentListItem>{comment.content}</S.commentListItem>
    </>
  );
}

export default CommentListItem;
