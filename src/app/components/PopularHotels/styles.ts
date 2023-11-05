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
`

export const Card = styled.div`
    h4{
        max-width: 20rem;
        font-weight: 600;
        margin-top: 0.5rem;
    }
    p{
        max-width: 21rem;
        font-size: 0.75rem;
        font-weight: 300;
    }

    &:hover{
        transform: scale(1.1);
        transition: 0.4s;
    }
`