import * as S from "../ui/Common.style";
import CommentListItem from "./CommentListItem";

export default function CommentList({ comments, onDelete }) {
  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} onDelete={onDelete} />
      ))}
    </S.ListContainer>
  );
}
