import * as C from "../ui/CommentListItem.style";
import BlogButton from "../list/Button";

export default function CommentListItem({ comment, onDelete }) {
  const handleDelete = () => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      onDelete(comment.id); // 부모로 삭제 요청 전달
    }
  };

  return (
    <C.CommentContainer>
      <C.CommentContent>
        {comment.content.split("\n").map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </C.CommentContent>
      <BlogButton label="삭제" onClick={handleDelete} />
    </C.CommentContainer>
  );
}
