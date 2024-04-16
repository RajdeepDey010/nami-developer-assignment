import React, { useState } from 'react'
import '../styles/SideNav.css'
import home from '../assets/home-btn.svg'
import arrow from '../assets/console-arrow.svg'
import console from '../assets/console-btn.svg'
import attendance from '../assets/attendance-icon.svg'
import overview from '../assets/overview-icon.svg'
import staff from '../assets/staff.svg'


function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown">
            <div className="homebtn">
                <span> <img src={home} alt="home" />
                    Home</span>
            </div>
            <div className="dropdown">
                <div onClick={toggleDropdown} className="consolebtn">
                    <img src={arrow} className='arrow' alt="console" />
                    <span>
                        <img src={console} className='console-btn' alt="console" />
                        Console
                    </span>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <a href="#"><img src={attendance} alt="attendance" />Attendance</a>
                        <a href="#"><img src={overview} alt="overview" />Overview</a>
                        <a href="#"><img src={staff} alt="staff" />Staff</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideNav
