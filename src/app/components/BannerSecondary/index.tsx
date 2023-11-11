import Image from "next/image";

import { Button } from "../Button";
import { Container } from "./styles";

import BannerImage from '../../assets/images/bannersecondary-image.png'
import MobileImage from '../../assets/images/mobile-image.png'

export function BannerSecondary(){
    return(
        <Container>
            <Image className="banner-class" src={BannerImage} alt="" />
            <div>
                <h2>Baixe o aplicativo móvel para cupons de bônus e códigos de viagem</h2>
                <Button background="blue" color="white" text="Baixe o aplicativo móvel" border="blue"/>
            </div>
            <div className="mobile-class">
                <Image src={MobileImage} alt="Baixe o app" />
            </div>
        </Container>
    )
}