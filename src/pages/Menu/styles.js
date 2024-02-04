import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled.div`
  padding: 2.6rem 12.4rem 0;
  width: 100%;
  max-width: 136.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > .header {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    display: grid;
    grid-template-columns: 9fr 1fr 1fr;
    padding: 2.4rem 12.3rem;
    gap: 2.4rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;

    .button {
      background: none;
      border: none;
      margin-top: auto;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 24px;
    }

  }



  @media (max-width: 1024px) {
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .header {
      width: 100%;
      background: ${({ theme }) => theme.COLORS.DARK_600};
      display: grid;
      grid-template-columns: 9fr 1fr 1fr;
      padding: 2.4rem 12.3rem;
      gap: 2.4rem;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 24px;

      .button {
        background: none;
        border: none;
        margin-top: auto;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 24px;
      }

    }
  }  
`;

export const Search = styled.div`
  display: flex;
  margin: 0 auto 4.6rem;

  width: 100%;

  height: 4.8rem;
  padding: 1.2rem 1.4rem;

  align-items: center;
  gap: 1.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  > svg {
    margin: 0 0.3rem 0 1rem;
  }

  > input {
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
export const Link = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100}

`;