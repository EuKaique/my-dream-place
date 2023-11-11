"use client"

import { AirplaneIcon } from "@/app/assets/icons/AirplaneIcon"
import Link from "next/link"
import { Button } from "../Button"
import { Box, Container, Heading2, ListItem, ListItems, RegisterContainer } from "./styles"

export function Header(){
    return(
        <Container>
            <Box>
                <Link href='/'>
                    <AirplaneIcon />
                    <Heading2>Meu lugar dos sonhos</Heading2>
                </Link>
            </Box>
            <Box>
                <ListItems>
                    <ListItem>
                        <Link href='/'>Início</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/discover'>Descubra</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/activities'>Atividades</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/about'>Sobre nós</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/contact'>Contato</Link>
                    </ListItem>
                </ListItems>
            </Box>
            <Box>
                <RegisterContainer>
                    <Button background="white" color="blue" border="blue" text="Cadastrar" />
                    <Button background="blue" color="white" border="blue" text="Entrar" />
                </RegisterContainer>
            </Box>
        </Container>
    )
}