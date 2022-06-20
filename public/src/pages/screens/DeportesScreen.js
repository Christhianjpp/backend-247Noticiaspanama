import React from 'react'
import Deportes from '../../componets/newsCatagory/Deportes'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const DeportesScreen = () => {
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Deportes />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default DeportesScreen