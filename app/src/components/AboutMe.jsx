import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
    return (
        <div>
            <h1 className='name'>Calliope Jimenez-Clark</h1>

            <p>As a Front-End Web Developer and Visual Designer I leverage my creativity as an asset towards my passion for building great products with a strong focus on aesthetics and functionality.</p>

            <FontAwesomeIcon icon={faCrow} />
        </div>
    )
}
