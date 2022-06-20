import React from 'react'
import CienciaYTecnologia from '../../componets/newsCatagory/CienciaYTecnologia'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const CienciaYTecnologiaScreen = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <CienciaYTecnologia />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default CienciaYTecnologiaScreen