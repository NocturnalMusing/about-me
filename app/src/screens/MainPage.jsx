import React from 'react'

import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'

import './MainPage.css'

export default function MainPage() {
    return (
        <div className='main'>
            <AboutMe />

            <Portfolio />

            <ContactMe />
        </div>
    )
}
