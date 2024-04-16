import React from 'react'
import "../styles/TopNav.css"
import bellIcon from '../assets/bell-icon.svg'
import profileLogo from '../img/profile-logo.png'

function TopNav() {
    return (
        <div className="nav-bar" >
            <header className='header'>
                <h1 className="abchotel">ABCHotel</h1>
                <div className="nav-links">
                    <img src={bellIcon} alt="Bell icon" className="bell-icon" />
                    <img src={profileLogo} alt="Profile logo" className="profile-icon" />
                </div>
            </header>
        </div>
    )
}

export default TopNav
