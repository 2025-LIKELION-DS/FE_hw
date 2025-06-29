import { useEffect, useState } from "react";
import postData from "../db/data.json";
import { Link, useNavigate } from "react-router-dom";
import { Container, Header, WriteButton, Title, List, PostItem} from "../style/mainPageStyle";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("posts")) || [];
    const combined = [...postData, ...stored];
    setPosts(combined);
  }, []);

  return (
    <Container>
      <Header>
        <WriteButton onClick={() => navigate("/write")}>글 작성하기</WriteButton>
        <Title>소플의 미니 블로그</Title>
      </Header>

      <List>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </PostItem>
        ))}
      </List>
    </Container>
  );
}

export default MainPage;
