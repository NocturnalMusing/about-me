import React from 'react'

import { Link } from 'react-router-dom'

export default function ContactMe() {
    return (
        <div>
            <h1>Contact Me</h1>

            <p>Email</p>
            <a href='https://www.linkedin.com/in/calliope-jimenez-clark/'>
                LinkedIn
            </a>
            <a href='https://github.com/NocturnalMusing'>
                GitHub
            </a>
            <Link to='/resume'>
                Resume
            </Link>
        </div>
    )
}
