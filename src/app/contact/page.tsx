import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import React from 'react'

const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <ImageWrapper />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact