import React from "react";
import * as D from '../../styles/CommentItemStyle';

function CommentListItem(props) {
  const { comment } = props;

  return (
    <D.Wrapp>
      <D.Content>{comment.content}</D.Content>
    </D.Wrapp>
  );
}

export default CommentListItem;