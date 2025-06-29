import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from '../../styles/MainStyle';
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../db/data.json';

function MainPage(props){
  const navigate = useNavigate();


  return(
    <M.Wrapp>
      <M.Container>
        <Button
            title="글 작성하기"
            onClick={() => {
                navigate("/post-write");
            }}
        />

        <PostList
            posts={data}
            onClickItem={(item) => {
                navigate(`/post/${item.id}`);
            }}
        />
      </M.Container>
    </M.Wrapp>
  )
}
export default MainPage;