import styled from 'styled-components';
import backgroundImg from '../../assets/polygon1.png';

export const Background = styled.div`
  background: url(${backgroundImg});
  background: transparent;
  padding: 300px;
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
`;

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Form = styled.form`
  padding: 64px;
  width: 100%;
  max-width: 476px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

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
    gap: 8px;
    width: 100%;
    margin-bottom: 3px;
    margin-top: 3px;

  }

  input {
    text-align: left;

  }

  button {
    margin-top: 32px;
    width: 348px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-top: 32px;
    
  }
`;



