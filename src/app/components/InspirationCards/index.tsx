import Image from "next/image";
import { cards } from "./mock";
import { Card, CardsContainer, Container } from "./styles";

export function InspirationCards(){
    return(
        <Container>
            <h2>Inspirações para sua próxima viagem</h2>
            <CardsContainer>
                {cards.map(card => (
                    <Card key={card.id}>
                        <Image src={card.image} alt={card.title} />
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                    </Card>
                ))}
            </CardsContainer>
        </Container>
    )
}