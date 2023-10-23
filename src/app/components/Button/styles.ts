import { styled } from "styled-components";

export const Container = styled.button<{ background: string, border: string, color: string }>`
    padding: 0.6rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.border === 'blue' ? '#0284c7' : '#ffffff'};
    background-color: ${props => props.background === 'blue' ? '#0284c7' : '#ffffff'};
    color: ${props => props.color === 'blue' ? '#0284c7' : '#ffffff'};
    width: 7rem;
    font-size: 0.9rem;
`