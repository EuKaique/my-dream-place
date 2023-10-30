import Image from "next/image"

import Australia from '../../assets/images/Australia-image.png'
import Japao from '../../assets/images/Japao-image.png'
import NovaZelandia from '../../assets/images/NovaZelandia-image.png'
import Grecia from '../../assets/images/Australia-image.png'
import { Card, CardsContainer, Container } from "./styles"

export function VacationCards(){
    return(
        <Container>
            <h2>Aproveite as férias dos sonhos</h2>
            <p>Planeje e reserve uma viagem perfeita com conselhos de especialistas, dicas de viagem, informações sobre destinos e com nossa inspiração</p>
            <CardsContainer>
                <Card>
                    <Image src={Australia} alt="Australia" />
                    <h4>Austrália</h4>
                    <span>2246 propriedades</span>
                </Card>
                <Card>
                    <Image src={Japao} alt="Japão" />
                    <h4>Japão</h4>
                    <span>1278 propriedades</span>
                </Card>
                <Card>
                    <Image src={NovaZelandia} alt="Nova Zelândia" />
                    <h4>Nova Zelândia</h4>
                    <span>480 propriedades</span>
                </Card>
                <Card>
                    <Image src={Grecia} alt="Grécia" />
                    <h4>Grécia</h4>
                    <span>320 propriedades</span>
                </Card>
            </CardsContainer>
        </Container>
    )
}