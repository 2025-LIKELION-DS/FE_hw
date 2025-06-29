    import styled from "styled-components";

    export const MainContainer = styled.div`
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    `;

    export const BlogTitle = styled.a`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    display:flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    color: black;
    `;

    export const BlogForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    `;

    export const TitleInput = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    `;

    export const ContentInput = styled.textarea`
    padding: 12px;
    font-size: 16px;
    height: 160px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
    `;

    export const BlogButton = styled.button`
    padding: 5px 8px;
    border: none;
    border-radius: 8px;
    background-color: #a6a6a6;
    width: 100px;
    cursor: pointer;
    `;
