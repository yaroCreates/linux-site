import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img src="/assets/logo.svg" alt="linuxjobber" />
            </div>
            <h2 className='header-middle'>Classroom Profile</h2>
            <div className="header-right">
                <p>Go to Classsroom</p>
                <i class=" fa fa-angle-right"></i>
            </div>
        </div>
    )
}
