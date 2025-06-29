import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import data from "../db/data.json";  
export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const combined = [...data, ...storedPosts];  
    setPosts(combined);
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  );
}
