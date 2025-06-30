import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import * as M from "../../style/MainPageStyled";
import data from "../db/data.json";


function MainPage(){
    const navigate = useNavigate();
    return(
        <M.Wrapper>
            <M.Container>
                <Button title="글 작성하기" onClick={() => navigate("/write")}/>
                <PostList posts={data} onClickItem={(item)=>{navigate(`/post/${item.id}`)}}/>
            </M.Container>
        </M.Wrapper>
    );
}

export default MainPage;


