import Image from "next/image";
import { popularHotels } from "./mock";
import { Card, CardsContainer, Container } from "./styles";

export function PopularHotels(){
    return(
        <Container>
            <h2>Hotéis populares</h2>
            <CardsContainer>
                {popularHotels.map(p => (
                    <Card key={p.id}>
                        <Image src={p.image} alt={p.title} />
                        <h4>{p.title}</h4>
                        <p>{p.text}</p>
                    </Card>
                ))}
            </CardsContainer>
        </Container>
    )
}