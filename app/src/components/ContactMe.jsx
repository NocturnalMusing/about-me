import React from 'react'

import { Link } from 'react-router-dom'

import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='contact-me'>
            <h1>Contact Me</h1>

            <ul>
                <li>Email</li>
                <li><a href='https://www.linkedin.com/in/calliope-jimenez-clark/'>LinkedIn</a></li>
                <li> <a href='https://github.com/NocturnalMusing'>GitHub</a></li>
                <li><Link to='/resume'>Resume</Link></li>
            </ul>
        </div>
    )
}
