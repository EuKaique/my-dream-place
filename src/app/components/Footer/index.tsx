import { AirplaneIcon } from "@/app/assets/icons/AirplaneIcon"
import Image from "next/image"
import { Box, Container, Copyright, FooterContainer, LogoColumn, LogoContainer, TitleContainer } from "./styles"


export function Footer(){
    const getDate = new Date().getFullYear()
    return(
        <Container>
            <TitleContainer>
                <h2>Explore o mundo com o Minha viagem</h2>
                <p>Descubra novos lugares e novas experiências</p>
            </TitleContainer>
            <FooterContainer>
                <LogoColumn>
                    <LogoContainer>
                        <AirplaneIcon />
                        <h4>Minha viagem</h4>
                    </LogoContainer>
                    <p>Sua próxima compania para viajar</p>
                </LogoColumn>
                <Box>
                    <h4>Compania</h4>
                    <ul>
                        <li>Sobre nós</li>
                        <li>Empregos</li>
                        <li>Redação</li>
                        <li>Anúncios</li>
                        <li>Contato</li>
                    </ul>
                </Box>
                <Box>
                    <h4>Explore</h4>
                    <ul>
                        <li>Austrália</li>
                        <li>Nova Zelândia</li>
                        <li>Estados Unidos</li>
                        <li>Grécia</li>
                        <li>Maldivas</li>
                        <li>Singapura</li>
                        <li><a href="#">Veja mais</a></li>
                    </ul>
                </Box>
                <Box>
                    <h4>Termos e políticas</h4>
                    <ul>
                        <li>Política de privacidade</li>
                        <li>Termos de uso</li>
                        <li>Acessibilidade</li>
                        <li>Política do sistema de recompensas</li>
                    </ul>
                </Box>
                <Box>
                    <h4>Ajuda</h4>
                    <ul>
                        <li>Suporte</li>
                        <li>Cancele suas reservas</li>
                        <li>Usar cupom</li>
                        <li>Política de reembolso</li>
                        <li>Documentos de viagem internacional</li>
                    </ul>
                </Box>
            </FooterContainer>
            <Copyright>
                <div>
                    <span>&copy; Meu lugar dos sonhos {getDate}</span>
                </div>
            </Copyright>
        </Container>
    )
}