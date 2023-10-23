import Image from "next/image";

import { useState } from "react";

import { Button } from "../Button";
import { DateField } from "../DateField";
import { TextField } from "../TextField";

import BannerImage from '../../assets/images/banner-image.png';
import { LocationIcon } from "../../assets/icons/LocationIcon";
import { UserSquareIcon } from "../../assets/icons/UserSquareIcon";
import { CalendarIcon } from "../../assets/icons/CalendarIcon";

import { BannerContainer, Container, FormSearchContainer } from "./styles";

export function Banner(){
    const [location, setLocation] = useState('')
    const [guest, setGuest] = useState('')
    const [dateIn, setDateIn] = useState('')
    const [dateOut, setDateOut] = useState('')
    const [openCalendarIn, setOpenCalendarIn] = useState(false)
    const [openCalendarOut, setOpenCalendarOut] = useState(false)

    const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value)
    }
    const handleGuest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuest(event.target.value)
    }

    const handleDateIn = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputDate = event.target.value
        inputDate = inputDate.replace(/\D/g, '')

        const day = 31
        const month = 12
        const year = new Date().getFullYear()

        if(inputDate.length === 8){
            const getDay   = parseInt(inputDate.slice(0, 2))
            const getMonth = parseInt(inputDate.slice(2, 4))
            const getYear  = parseInt(inputDate.slice(4, 8))

            const getYearCalendar   = parseInt(inputDate.slice(0, 4))
            const getMonthCalendar  = parseInt(inputDate.slice(4, 6))
            const getDayCalendar    = parseInt(inputDate.slice(6, 8))

            if((getDay <= day && getMonth <= month && getYear <= year)){
                inputDate = `${getDay}/${getMonth}/${getYear}`
                setDateIn(inputDate)
            }else if(getDayCalendar <= day && getMonthCalendar <= month && getYearCalendar <= year){
                inputDate = `${getDayCalendar}/${getMonthCalendar}/${getYearCalendar}`
                setDateIn(inputDate)
            }else{
                setDateIn('Data inválida')
                setTimeout(() => {
                    setDateIn('')
                },2000)
            }
            return inputDate
        }
        setDateIn(inputDate)
    }

    const handleDateOut = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputDate = event.target.value
        inputDate = inputDate.replace(/\D/g, '')

        const day = 31
        const month = 12
        const year = new Date().getFullYear()

        if(inputDate.length === 8){
            const getDay   = parseInt(inputDate.slice(0, 2))
            const getMonth = parseInt(inputDate.slice(2, 4))
            const getYear  = parseInt(inputDate.slice(4, 8))

            const getYearCalendar   = parseInt(inputDate.slice(0, 4))
            const getMonthCalendar  = parseInt(inputDate.slice(4, 6))
            const getDayCalendar    = parseInt(inputDate.slice(6, 8))

            if((getDay <= day && getMonth <= month && getYear <= year)){
                inputDate = `${getDay}/${getMonth}/${getYear}`
                setDateOut(inputDate)
            }else if(getDayCalendar <= day && getMonthCalendar <= month && getYearCalendar <= year){
                inputDate = `${getDayCalendar}/${getMonthCalendar}/${getYearCalendar}`
                setDateOut(inputDate)
            }else{
                setDateOut('Data inválida')
                setTimeout(() => {
                    setDateOut('')
                },2000)
            }
            return inputDate
        }
        setDateOut(inputDate)
    }

    const handleOpenCalendarIn = () => {
        setOpenCalendarIn(!openCalendarIn)
        setOpenCalendarOut(false)
    }

    const handleOpenCalendarOut = () => {
        setOpenCalendarOut(!openCalendarOut)
        setOpenCalendarIn(false)
    }

    return(
        <Container>
            <BannerContainer>
                <Image src={BannerImage} alt="" />
                <div>
                    <h2>Aproveite as férias dos seus sonhos</h2>
                    <p>Planeje e reserve nossa viagem perfeita com conselhos de especialistas, viagens, informações sobre destinos e inspiração nossa</p>
                </div>
            </BannerContainer>
            <FormSearchContainer>
                <TextField 
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Onde você está indo?"
                    value={location}
                    onChange={handleLocation}
                    icon={<LocationIcon />}
                />
                <DateField 
                    id="date_in"
                    name="date_in"
                    placeholder="Data da ída"
                    onClick={handleOpenCalendarIn}
                    open={openCalendarIn}
                    value={dateIn}
                    onChange={handleDateIn}
                    icon={<CalendarIcon />}
                />
                <DateField 
                    id="date_out"
                    name="date_out"
                    placeholder="Data da volta"
                    onClick={handleOpenCalendarOut}
                    open={openCalendarOut}
                    value={dateOut}
                    onChange={handleDateOut}
                    icon={<CalendarIcon />}
                />
                <TextField 
                    id="guests"
                    name="guests"
                    placeholder="Convidados"
                    type="text"
                    value={guest}
                    onChange={handleGuest}
                    icon={<UserSquareIcon />}
                />
                <Button background="blue" color="white" border="blue" text="Buscar" />
            </FormSearchContainer>
        </Container>
    )
}