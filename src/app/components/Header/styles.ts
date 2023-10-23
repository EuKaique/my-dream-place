import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    flex: 1 2 1;
    height: 6rem;
`
export const Box = styled.div`
    a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`
export const Heading2 = styled.h2`
    font-weight: 600;
    color: #333333;
`
export const ListItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`
export const ListItem = styled.li`
    font-size: 0.95rem;
    color: #333333;

    :hover{
        color: #0284c7;
        border-bottom: 3px solid #0284c7;
        transition: 0.2s;
    }
`
export const RegisterContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`