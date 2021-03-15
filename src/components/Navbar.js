import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Titan Face <i class="fas fa-grin-tongue"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
