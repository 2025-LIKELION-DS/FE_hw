import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as V from "../../style/PostViewPageStyled"
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../db/data.json";

function PostViewPage(props){
    const navigate = useNavigate();
    const { id } = useParams();

    const post = data.find((item) => {
        return item.id == id;
    });
    const [comment, setComment] = useState("");

    return (
        <V.Wrapper>
            <V.Container>
                <Button title="뒤로 가기" onClick={() => { navigate("/");}}/>
                <V.PostContainer>
                    <V.TitleText>{post.title}</V.TitleText>
                    <V.ContentText>{post.content}</V.ContentText>
                </V.PostContainer>

                <V.CommentLabel>댓글</V.CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button title="댓글 작성하기" onClick={() => {navigate("/");}}/>
            </V.Container>
        </V.Wrapper>
    );
}

export default PostViewPage;