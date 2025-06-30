import * as S from "../../style/CommentListItemStyled";

function CommentListItem(props) {
    const { comment } = props;

    return (
        <S.Wrapper>
            <S.ContentText>{comment.content}</S.ContentText>
        </S.Wrapper>
    )
}

export default CommentListItem;