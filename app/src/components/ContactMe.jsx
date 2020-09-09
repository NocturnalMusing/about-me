import React from 'react'
import { Link } from 'react-router-dom'

import './ContactMe.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe() {
    return (
        <div className='contact-me'>
            <h1 className='contact-header'>Contact Me</h1>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faEnvelopeSquare} className='contact-icon' size='1x'/>
                    Email
                </li>
                <li> 
                    <FontAwesomeIcon icon={faLinkedin} className='contact-icon' size='1x'/>
                    <a href='https://www.linkedin.com/in/calliope-jimenez-clark/'>LinkedIn</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithubSquare} className='contact-icon' size='1x'/> 
                    <a href='https://github.com/NocturnalMusing'>GitHub</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} className='contact-icon' size='1x'/>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </div>
    )
}
