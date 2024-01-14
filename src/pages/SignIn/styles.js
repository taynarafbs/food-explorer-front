import styled from 'styled-components';
import backgroundImg from '../../assets/polygon1.png';

export const Background = styled.div`
  background: url(${backgroundImg});
  background: transparent;
  padding: 200px;
  display: flex;
  flex-direction: row;
  gap: 19px;
  justify-content: center;
  align-items: center;
  border: none;
  

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 42px;
  }

  @media (max-width: 1000px) {
    padding: 0;
    
    h1 {
      font-size: 37.2431px;
    }

    > img {
      width: 43.31px;
      height: 43.31px;
    }
  }
`;


export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    max-width: 428px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  padding: 64px;

  width: 100%;
  max-width: 476px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;
  
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 32px;
  }

  label {
    text-align: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: flex;
    flex-direction: column;
    width: 100%;
  
  }

  input {
    text-align: left;

  }

  button {
    width: 348px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-top: 3px;
  }

  @media (max-width: 1000px) {
    background-color: transparent;

    max-width: 476px;

    > h1 {
      display: none;
    }

    button {
      width: 300px;
    }

  }

`;
