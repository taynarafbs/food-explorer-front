import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;

  

  > label {
  font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
`;

export const Field = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  margin-top: auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border-radius: 8px;


  > input {
  width: 100%;
  
  font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
  text-align: center;
  
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: transparent;
  border: 0;

  &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
   -moz-appearance: textfield;
   appearance: textfield;

   &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #0D161B inset;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:placeholder {
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  } 
  
`;
