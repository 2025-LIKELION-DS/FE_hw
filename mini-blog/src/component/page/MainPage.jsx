import React from "react";
import { Link } from "react-router-dom";
//import postData from "../../db/data.json";
import PostList from "../list/PostList";
import * as S from "../../styles/MainPageStyle";

function MainPage() {
  return (
    <div>
      <S.mainTitle>소플의 미니 블로그</S.mainTitle>
      <Link to="/write">
        <button>글 작성하기</button>
      </Link>
      <PostList />
    </div>
  );
}

export default MainPage;
