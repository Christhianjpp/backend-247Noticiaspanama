import React from 'react'
import Farandula from '../../componets/newsCatagory/Farandula'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const FarandulaScreen = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Farandula />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default FarandulaScreen