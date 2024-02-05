import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute; 
  z-index: 4;
  display: grid;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  grid-template-rows: 11.4rem auto;

  grid-template-areas: 
  "form"
  "search"
  "footer"
;

  overflow-x: hidden;

  @media(min-width: 1024px) {
    display: none;
  }
`

export const Form = styled.div`
  padding: 2.6rem 12.4rem 0;
  width: 100%;
  max-width: 136.8rem;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  align-items: center;


  a {
    align-self: flex-start;

    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 300;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding-bottom: 1rem;
  }

  a:not(:first-child):nth-of-type(n + 2) {
      margin-top: 1rem;
    }
  

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

    > button {
      background: transparent;
      border: none;
      margin-top: auto;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 24px;
      margin-top: auto; 
      margin-bottom: auto;
    }
  }

  @media (max-width: 1024px) {
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    

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

      > button {
        background: transparent;
        border: none;
        margin-top: auto;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 24px;
        margin-top: auto; 
        margin-bottom: auto;
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
