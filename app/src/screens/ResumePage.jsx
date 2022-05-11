import React from 'react'
import Resume from '../assets/images/Resume_2022.png'

import './ResumePage.css'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

// import ResumeEmployment from '../components/ResumeEmployment'
// import ResumeSkills from '../components/ResumeSkills'
// import ResumeEducation from '../components/ResumeEducation'

library.add(faAngleDoubleLeft)

export default function ResumePage() {
    return (
        <div className='resume'>
            <Link to='/'>
                <FontAwesomeIcon icon='angle-double-left' size='3x'/>
            </Link>

            <img  src={Resume} alt="CJC_Resume_2022" className='resume_img'></img>
            
        </div>
    )
}
