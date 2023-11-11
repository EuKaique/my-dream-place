import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 5rem;
`
export const TitleContainer = styled.div`
    text-align: center;
    h2{
        color: #181818;
        font-size: 1.55rem;
        font-weight: 700;
    }
    p{
        color: #2F80ED;
        margin-top: 0.2rem;
    }
`
export const FooterContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr repeat(2, 0.8fr) repeat(2, 1.2fr);
    column-gap: 1rem;
`
export const LogoColumn = styled.div`
    p{
        margin-top: 1rem;
        font-size: 0.9rem;
        width: 90%;
    }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h4{
        font-size: 1.2rem;
        font-weight: 600;
    }
`
export const Box = styled.div`
    h4{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
    ul{
        list-style: none;
        line-height: 1.8rem;
    }
    li{
        font-size: 0.9rem;
    }
`
export const Copyright = styled.div`
    background-color: #EBEBEB;
    color: #4F4F4F;
    div{
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem 8rem;
    }
`