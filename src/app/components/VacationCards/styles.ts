import { styled } from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        padding-bottom: 1rem;
    }
    p{
        width: 60%;
        padding-bottom: 1rem;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
`
export const Card = styled.div`
    width: 23%;
    height: auto;

    h4{
        font-size: 1rem;
        font-weight: 600;
        margin-top: 0.5rem;
    }
    span{
        font-size: 0.9rem;
    }
    img:hover{
        transform: scale(1.1);
        transition: 0.4s;
        cursor: pointer;
    }
`