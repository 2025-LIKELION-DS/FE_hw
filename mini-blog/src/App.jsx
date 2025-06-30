import { Routes,Route } from "react-router-dom";
import MainPage from "./componenet/page/MainPage";
import PostViewPage from "./componenet/page/PostViewPage";
import PostWritePage from "./componenet/page/PostWritePage";
import styled from "styled-components";

const Title = styled.header`
  font-size:24px;
  font-weight: bold;
  text-align: center;
`;


function App(){
  return(
    <div className="App">
      
        <Title>소플의 미니 블로그</Title>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostViewPage/>}/>
          <Route path="/write" element={<PostWritePage/>}/>
        </Routes>
      
    </div>
  );
}

export default App;