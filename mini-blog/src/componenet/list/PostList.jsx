import PostListItem from "./PostListItem";
import * as P from "../../style/PostListStyled";

function PostList(props){
    const { posts,onClickItem } = props;

    return(
        <P.Wrapper>
            {posts.map((post)=>{
                return(<PostListItem key={post.id} post={post} onClick={() => {onClickItem(post)}}/>)
            })}
        </P.Wrapper>
    );
}

export default PostList;