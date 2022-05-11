import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

import { Resume } from '../assets/images/Resume.png'

library.add(faAngleDoubleLeft)

export default function ResumePage() {
    return (
        <div className='resume'>
            <Link to='/'>
                <FontAwesomeIcon icon='angle-double-left' size='3x'/>
            </Link>

            <img src="{Resume}">
        </div>
    )
}
