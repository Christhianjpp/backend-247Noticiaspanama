import React from 'react'
import Publicity from '../publicity/Publicity'
import SocialMediaFollowers from '../socialMedia/SocialMediaFollowers'

const SideBar = () => {
    return (
        <div className='row mt-6'>
            <div className='col-lg-12  col-md-6'>

                <Publicity />
            </div>
            <div className='col-lg-12 col-md-6 mt-5'>
                <SocialMediaFollowers />

            </div>
        </div>
    )
}

export default SideBar