import styled from 'styled-components';

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

    > .ImageHome  {
        width: 100%;
        position: relative;
        margin-top: 16.6rem;

        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        border-radius: 0.8rem;
        height: 26rem;
        padding: 10rem;
    
        .imageHeader {
            position: absolute;
            max-width: 63.2rem;
            left: -7rem;
            bottom: -1.4rem;
        }
    
        > .description {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: last baseline;
            position: absolute;
            width: 50%;
            min-width: 42.2rem;
            right: 10rem;
            top: 8.9rem;

            h1 {
                font-size: 4rem;
                font-weight: 600;
            }

            p {
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
    }

    

`