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

    > main {
        margin-top: 4.2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 4.8rem;
        align-items: center;

        img {
            max-width: 39rem;
        }

        .dishInformation {
            display: flex;
            flex-direction: column;
            gap: 2.4rem;

            h1 {
                font-size: 4rem;
                white-space: nowrap;
            }

            p {
                font-size: 2.4rem;
                word-wrap: break-word;
            }

            .tags {
                display: flex;
                flex-direction: row;
                gap: 10px;
            }

            .dishAdd {
                max-width: 131px;

                p {
                    font-size: 1.4rem;
                }
            }
        }

        .quantity {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 3.3rem;

            .decreaseOrAdd {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 1.4rem;
                font-size: 2rem;
            }

            .dishAdd {
                width: 16.2rem;
                
                p {
                    font-size: 1.4rem;
                }
            }
        }

    }

`;