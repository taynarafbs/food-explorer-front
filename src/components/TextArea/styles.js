import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 150px;
    /* background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; */
    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    /* padding: 16px; */

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    textarea {
    height: 17.2rem;
    resize: none;
    padding: 1.4rem;
    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
      line-height: 100%;
    }}
`;