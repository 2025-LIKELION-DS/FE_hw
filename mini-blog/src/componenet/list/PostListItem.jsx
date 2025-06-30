import * as P from "../../style/PostListItemStyle";

function PostListItem(props){
    const { post, onClick } = props;

    return(
        <P.Wrapper onClick={onClick} >
        <P.TitleText>{post.title}</P.TitleText>
        </P.Wrapper>
    );
}

export default PostListItem;