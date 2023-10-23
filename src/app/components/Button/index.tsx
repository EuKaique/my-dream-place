"use client"

import { Container } from "./styles"

interface ButtonProps {
    text: string
    color: 'white' | 'blue'
    background: 'white' | 'blue'
    border: 'white' | 'blue'
}

export const Button = (props: ButtonProps) => {
    return(
        <Container
            color={props.color}
            background={props.background}
            border={props.border}
        >
            {props.text}
        </Container>
    )
}