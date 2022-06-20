import React from 'react'
import SideBarNews from '../sideBar/SideBarNews'
import ViewsNews from './ViewsNews'

const ViewsNacional = () => {
    return (
        <div className='row container'>
            <div className='col-lg-9'>
                <ViewsNews />

            </div>
            <div className='col-lg-3'>
                <SideBarNews />
            </div>

        </div>
    )
}

export default ViewsNacional