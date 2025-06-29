import styled from "styled-components";


export const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;