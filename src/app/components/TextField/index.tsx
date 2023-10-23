import { ReactNode } from "react"
import { Container, IconContainer } from "./styles"

interface TextFieldProps {
    id: string
    name: string
    placeholder: string
    type: 'text' | 'email' | 'password'
    value: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    icon?: ReactNode
}

export const TextField = (props: TextFieldProps) => {
    return(
        <Container>
            <IconContainer>{props.icon}</IconContainer>
            <input
                id={props.id}
                name={props.name} 
                type={props.type} 
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} 
            />    
        </Container>
    )
}