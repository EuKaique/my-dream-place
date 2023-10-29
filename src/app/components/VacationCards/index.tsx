import Image from "next/image"

import Australia from '../../assets/images/Australia-image.png'
import Japao from '../../assets/images/Japao-image.png'
import NovaZelandia from '../../assets/images/NovaZelandia-image.png'
import Grecia from '../../assets/images/Australia-image.png'
import { Card, CardsContainer, Container } from "./styles"

export function VacationCards(){
    return(
        <Container>
            <h2>Enjoy your dream vacation</h2>
            <p>Plan an book our perfect trip with expert advice, travel tips, destination information and inspiration from us</p>
            <CardsContainer>
                <Card>
                    <Image src={Australia} alt="Australia" />
                    <h4>Australia</h4>
                    <span>2246 properties</span>
                </Card>
                <Card>
                    <Image src={Japao} alt="Japão" />
                    <h4>Japão</h4>
                    <span>1278 properties</span>
                </Card>
                <Card>
                    <Image src={NovaZelandia} alt="Nova Zelândia" />
                    <h4>Nova Zelândia</h4>
                    <span>480 properties</span>
                </Card>
                <Card>
                    <Image src={Grecia} alt="Grécia" />
                    <h4>Grécia</h4>
                    <span>320 properties</span>
                </Card>
            </CardsContainer>
        </Container>
    )
}