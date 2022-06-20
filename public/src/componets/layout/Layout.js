import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Header />

            {children}
            <Footer />
        </div>
    )
}

export default Layout