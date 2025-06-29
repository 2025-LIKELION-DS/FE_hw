    import styled from "styled-components";

    export const Container = styled.div`
    padding: 40px 20px;
    `;

    export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
    `;

    export const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    `;

    export const WriteButton = styled.button`
    position: absolute;
    left: 0;
    padding: 8px 12px;
    border: none;
    background-color: #ddd;
    border-radius: 8px;
    cursor: pointer;
    `;

    export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    `;

    export const PostItem = styled.li`
    list-style: none;
    border: 1px solid #ccc;
    padding: 14px;
    border-radius: 8px;
    font-size: 16px;

    a {
        text-decoration: none;
        color: #000;
    }
    `;
