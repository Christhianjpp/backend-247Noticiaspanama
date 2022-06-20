import React from 'react'
import moment from 'moment'

import 'moment/locale/es';
import { SocialMediaData } from '../socialMedia/SocialMediaData';

const Top = () => {
    return (
        <div className='navbar-top'>

            <div className='row navbar-top-row container d-flex '>

                <div className='col navbar-top-left list-unstyled'>

                    <div className='fecha'>
                        <i className="bi bi-calendar4-week "></i>
                        {moment().format('LL')}</div>
                    <div className='ms-2 menu-top'>Contáctanos</div>

                </div>
                <div className='col-sm-3  navbar-top-right'>
                    <div className='social-media'>
                        <ul className='d-flex flex-end list-unstyled ul-icon '>
                            {
                                SocialMediaData.map((data, index) =>
                                (
                                    <li key={index}>
                                        <a href={data.link} >{data.icon}</a>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Top