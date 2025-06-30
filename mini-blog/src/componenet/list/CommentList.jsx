import CommentListItem from "../list/CommentListItem";
import * as C from "../../style/CommentListStyled";

function CommentList(props) {
    const { comments }= props;

    return (
        <C.Wrapper>
            {comments.map((comment,index)=>{
                return <CommentListItem key={comment.id} comment={comment}/>;
            })}
        </C.Wrapper>
    )
}

export default CommentList;