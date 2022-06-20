import React from 'react'
import { SocialMediaData } from '../socialMedia/SocialMediaData'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='container pt-5'>

                <div className='socialmedia-footer mb-5'>
                    <ul className='d-flex'>
                        {
                            SocialMediaData.map((red, index) => (
                                <li key={index}>
                                    <a href={red.link} > {red.icon}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='text-center text-white pb-3'>
                    © 2022 Copyright:
                    <a className='text-dark text-decoration-none btn-login' href='/auth/login'> : </a>
                    <a className='text-white text-decoration-none' href='#!'> 24/7 Noticias Panamá</a>
                </div>
            </div>
        </div>
    )
}

export default Footer