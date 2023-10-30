import { DangerIcon } from "@/app/assets/icons/DangerIcon";
import { Container, IconContainer, MessageContainer } from "./styles";

export function Info(){
    return(
        <Container>
            <IconContainer>
                <DangerIcon />
            </IconContainer>
            <MessageContainer>
                <h4>Verifique as últimas restrições do COVID-19 antes de viajar.</h4>
                <a href="#">Saiba mais</a>
            </MessageContainer>
        </Container>
    )
}