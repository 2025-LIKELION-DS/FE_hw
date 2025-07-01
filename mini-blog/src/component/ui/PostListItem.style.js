import styled from "styled-components";

export const PostListContainer = styled.div`
  border: var(--border);
  border-radius: var(--radius);
  padding: var(--padding);
  cursor: pointer;
`;

export const PostList = styled.div`
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: gray;
  }
`;
