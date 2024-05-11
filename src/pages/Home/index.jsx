import React from 'react'
import { Hero } from './Hero'
import { AboutUs } from './AboutUs'
import { MenuSection } from './MenuSection'
import { Feedbacks } from './Feedbacks'
import { ChooseUs } from './ChooseUs'
import { Contact } from './Contact'

export function Home() {
  return (
    <>
        <Hero />
        <AboutUs />
        <MenuSection />
        <Feedbacks />
        <ChooseUs />
        <Contact />
    </>
  )
}
