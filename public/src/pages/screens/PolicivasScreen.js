import React from 'react'
import Policivas from '../../componets/newsCatagory/Policivas'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const PolicivasScreen = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Policivas />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default PolicivasScreen