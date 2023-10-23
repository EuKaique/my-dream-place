import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 0.5rem;

    input{
        outline: none;
        background-color: transparent;
        color: #4F4F4F;
        font-size: 0.95rem;
        padding-left: 0.5rem;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
    }
    .react-calendar{
        position: absolute;
        left: 34%;
        bottom: 100%;
        box-shadow: 0 0 3rem #212121;
        border-radius: 0.6rem;
    }
`

export const IconContainer = styled.div`
    padding-left: 1rem;
    cursor: pointer;
`

export const CalendarContainer = styled.div`

`

export const TitleContainer = styled.h3`
    position: absolute;
    left: 42%;
    bottom: 600%;
    background-color: #fff;
    border-radius: 0.8rem 0.8rem 0 0;
    padding: 1rem;
    font-weight: 700;
    text-transform: uppercase;
`