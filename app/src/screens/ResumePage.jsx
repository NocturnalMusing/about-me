import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleLeft)

export default function ResumePage() {
    return (
        <>
            <Link to='/'>
                <FontAwesomeIcon icon='angle-double-left' size='2x'/>
            </Link>

            <h3>To be added...</h3>
        </>
    )
}
