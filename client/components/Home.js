import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Intro from './Intro'
import Services from './Services'
import Work from './Work'

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Services />
            <Work />
            <About />
            <Footer />
        </>
    )
}
