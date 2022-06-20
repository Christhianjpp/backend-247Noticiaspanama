import React from 'react'
import Internacionales from '../../componets/newsCatagory/Internacionales'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const InternacionalesScreen = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Internacionales />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default InternacionalesScreen