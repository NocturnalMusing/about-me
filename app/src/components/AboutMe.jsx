import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow } from '@fortawesome/free-solid-svg-icons'

import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className='about-me'>
            <h2 className='first-name'>Calliope</h2>
            <h1 className='last-name'>Jimenez-Clark</h1>
            <p className='poe'>
            <FontAwesomeIcon icon={faCrow} size='2x'/>
            </p>
            <p className='blurb'>As a Front-End Web Developer and Visual Designer I leverage my creativity as an asset
                towards my passion for building great products with a strong focus on aesthetics and functionality.</p>
        </div>
    )
}
