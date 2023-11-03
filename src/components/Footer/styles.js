import styled from "styled-components";

export const Container = styled.footer `
    width:100%;
    flex-shrink: 0;
    grid-area: footer;
    bottom: 0;

    background: ${({ theme }) => theme.COLORS.DARK_600};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 12.3rem;
     
    > h4 {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 500;
    }




`;

export const Logo = styled.div`
    background: transparent;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border: none;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        font-size: 2.4rem;
        white-space: nowrap;

    }


`;

