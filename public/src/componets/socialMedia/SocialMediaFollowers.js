import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaFollowers = () => {
    return (
        <div className='' >
            <div className='title-header'>
                <h2 className='title-header-h'>
                    <Link to='/' >REDES SOCIALES</Link>
                </h2>
            </div>

            <div className='social-media d-flex mt-3'>
                <div className='social-media__twitter'>
                    <i className='bi bi-twitter'></i>
                </div>
                <div className='social-media__instagram'>
                    <i className='bi bi-instagram'></i>
                </div>
                <div className='social-media__facebook'>
                    <i className='bi bi-facebook'></i>
                </div>

            </div>

        </div>
    )
}

export default SocialMediaFollowers