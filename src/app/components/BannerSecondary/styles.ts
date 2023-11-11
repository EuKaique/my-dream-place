import { styled } from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;

    
    @media (min-width: 1920px) {
        .banner-class{
            width: 100%;
        }
    }

    .mobile-class{
        position: absolute;
        top: 130rem;
        left: 30rem;

        img{
            width: 97.4%;
        }

        @media (min-width: 1920px){
            top: 167.4rem;
            left: 50rem;
            img{
                width: 100%;
                height: 32.35rem;
            }
        }
    }

    h2{
        position: absolute;
        top: 133rem;
        left: 8rem;
        color: white;
        font-size: 1.4rem;
        max-width: 32rem;

        @media (min-width: 1920px){
            top: 180rem;
            left: 16rem;
            max-width: 36rem;
        }
    }

    button{
        position: absolute;
        top: 140rem;
        left: 8rem;
        width: 15%;

        @media (min-width: 1920px){
            top: 190rem;
            left: 16rem;
            width: 20%;
            height: 7%;
            font-size: 1.2rem;
        }
    }
`