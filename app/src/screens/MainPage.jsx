import React from 'react'

import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'

import './MainPage.css'

export default function MainPage() {
    return (
        <div className='main'>
            <div className='main-sub'>
                <AboutMe />
                <Portfolio />
                <ContactMe />
            </div>
        </div>
    )
}
