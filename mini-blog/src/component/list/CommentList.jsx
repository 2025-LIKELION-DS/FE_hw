import React from 'react';
import dummy from '../../db/data.json';

const CommentList = ({ postId }) => {
  const post = dummy.posts.find((post) => post.id === parseInt(postId));


  if (!post) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  const { comments } = post;

  if (!comments || comments.length === 0) {
    return <div>아직 댓글이 없습니다.</div>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
