import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  input[type="file"] {
    display: none;
  }
`;

export const Form = styled.form`
  max-width: 1368px;
  width: 100%;
  padding: 40px 123px;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > button {
      font-size: 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 24px;
      background-color: transparent;
      border: none;
      color: white;
    }
  }

  > h1 {
    font-size: 32px;
    white-space: nowrap;
  }

  > .FirstInformation {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 32px;

    .dishImage {
      > h5 {
        margin-top: 16px;
        font-size: 16px;
        font-weight: 400;
      }

      .image {
        
        width: 100%;
        height: 48px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 32px;

        label {
          font-size: 14px;
        }
      }
    }

    .category {
      width: 100%;
      height: 48px;
      border: none;
      color: white;
      border-radius: 5px;
      padding: 4px;
      
    }
  }

  > .additionalInformation {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 25px;
  }

  > .dishImage, .name, .category, .ingredients, .price, .description {
    > h5 {
      margin-top: 16px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 16px;

    Button {
      display: flex;
      
      width: 172px;
      align-items: center;
      text-align: center;
      font-size: 14px;
      white-space: nowrap;
    }
  
  }
  #buttonExcluir {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  #buttonSalvar {
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

`;  