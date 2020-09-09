import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow } from '@fortawesome/free-solid-svg-icons'

import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className='about-me'>
            <h1 className='first-name'>Calliope</h1>
            <h2 className='last-name'>Jimenez-Clark</h2>

            <p>As a Front-End Web Developer and Visual Designer I leverage my creativity as an asset
                towards my passion for building great products with a strong focus on aesthetics and functionality.</p>

            <FontAwesomeIcon icon={faCrow} size='2x' className='poe'/>
        </div>
    )
}
