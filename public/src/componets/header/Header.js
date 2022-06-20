import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Top from './Top'

const Header = () => {
    return (
        <div>
            <Top />
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header