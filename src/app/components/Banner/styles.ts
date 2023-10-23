import { styled } from "styled-components";

export const Container = styled.div`
    padding: 0 1rem;
    margin-bottom: 5%;
`
export const BannerContainer = styled.div`
    padding: 0 3rem;
    div{
        position: absolute;
        top: 45%;
        left: 27%;
        width: 45%;
        color: #fff;
        text-align: center;
        h2{
            padding-bottom: 2rem;
            font-size: 1.65rem;
            font-weight: 600;
        }
    }

`

export const FormSearchContainer = styled.div`
    position: absolute;
    top: 90%;
    left: 7.5%;
    width: 85%;
    padding: 0.5rem 1rem;
    height: 4rem;
    background-color: #fff;
    border-radius: 0.7rem;
    display: grid;
    grid-template-columns: 1fr repeat(2, 0.6fr) 0.8fr 0.5fr;
    column-gap: 0.5rem;
    box-shadow: 
        -webkit-box-shadow: 0px 11px 11px -4px rgba(182,182,204,1);
        -moz-box-shadow: 0px 11px 11px -4px rgba(182,182,204,1);
    box-shadow: 0px 11px 11px -4px rgba(182,182,204,1);
`