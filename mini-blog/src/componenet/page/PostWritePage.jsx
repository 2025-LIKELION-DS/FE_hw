import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import * as P from "../../style/PostWritePageStyled";

function PostWritePage(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <P.Wrapper>
            <P.Container>
                <TextInput height={20} value={title} onChange={(event) => { setTitle(event.target.value);}}/>
                <TextInput height={480} value={content} onChange={(event) => { setContent(event.target.value);}}/>
                <Button title="글 작성하기" onClick={() => {navigate("/")}} />
            </P.Container>
        </P.Wrapper>
    );
}

export default PostWritePage;