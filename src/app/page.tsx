"use client"

import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { InspirationCards } from "./components/InspirationCards";
import { VacationCards } from "./components/VacationCards";
import './global.style.css'

export default function Home() {
  return (
      <>
        <Header />
        <Banner />
        <Info />
        <VacationCards />
        <InspirationCards />
      </>
  )
}
