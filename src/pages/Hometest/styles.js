import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;

export const Form = styled.div`
    width: 100%;
    max-width: 1386px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 2.4rem 12.3rem 10rem;

    .goBack{
        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
    }

`;