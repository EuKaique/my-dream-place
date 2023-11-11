import { styled } from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 4rem auto;

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        padding-bottom: 1rem;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    gap: 1.5rem;

    h4, p{
        position: absolute;
        color: #FFFFFF;
    }
    h4{
        margin-top: -7.2rem;
        margin-left: 1rem;
        max-width: 20rem;
    }
    p{
        margin-top: -3.5rem;
        margin-left: 1rem;
        max-width: 21rem;
        font-size: 0.85rem;
        font-weight: 300;
    }

    @media (min-width: 1920px){
        gap: 3rem;
    }


`
export const Card = styled.div`
    width: 31.96%;
    height: auto;

    &:hover{
        transition: 0.4s;
        filter: brightness(0.6);
        cursor: pointer;
    }

    @media (min-width: 1920px){
        img{
            width: 100%;
        }
    }
`