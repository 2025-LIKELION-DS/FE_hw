import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/:id" element={<PostViewPage />} />
        <Route path="/write" element={<PostWritePage />}></Route>
        <Route path="/" element={<PostViewPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
