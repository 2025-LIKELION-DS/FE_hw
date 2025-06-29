    import styled from "styled-components";

    export const Container = styled.div`
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    `;

    export const BackButton = styled.button`
    padding: 6px 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #f1f1f1;
    cursor: pointer;
    `;

    export const PostBox = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    background-color: #fff;
    `;

    export const CommentList = styled.ul`
    margin-bottom: 20px;
    padding: 0;
    `;

    export const CommentItem = styled.li`
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 10px;
    list-style: none;
    `;

    export const CommentTextArea = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    resize: none;
    `;

    export const SubmitButton = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #e0e0e0;
    border: none;
    cursor: pointer;
    `;
