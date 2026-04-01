import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuSection from './components/MenuSection'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
