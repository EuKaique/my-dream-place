import { DangerIcon } from "@/app/assets/icons/DangerIcon";
import { Container, IconContainer, MessageContainer } from "./styles";

export function Info(){
    return(
        <Container>
            <IconContainer>
                <DangerIcon />
            </IconContainer>
            <MessageContainer>
                <h4>Check the latest COVID-19 restrictions before you travel. </h4>
                <a href="#">Learn more</a>
            </MessageContainer>
        </Container>
    )
}