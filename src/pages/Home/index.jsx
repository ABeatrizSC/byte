import React from 'react'
import { Hero } from './Hero'
import { AboutUs } from './AboutUs'
import { Feedbacks } from './Feedbacks'
import { Contact } from './Contact'

export function Home() {
  return (
    <>
        <Hero />
        <AboutUs />
        <Feedbacks />
        <Contact />
    </>
  )
}
