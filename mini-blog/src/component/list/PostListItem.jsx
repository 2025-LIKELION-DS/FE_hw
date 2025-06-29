import React from 'react';
const PostListItem = ({post})=>{
  if (!post) return <div>게시글 없음</div>;

  return (
   
   <div>
    <h2>{post.title}</h2>
    <h4>{post.content}</h4>

   </div>
  
    
  );
}


export default PostListItem;