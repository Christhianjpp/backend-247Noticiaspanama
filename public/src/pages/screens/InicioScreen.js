import React, { useEffect } from 'react'
import { startNewNews, startNewsImpacto } from '../../actions/newsCategory'
import Impacto from '../../componets/newsCatagory/Impacto'
import { useDispatch } from 'react-redux'
import NewNews from '../../componets/newsCatagory/NewNews'
import SideBar from '../../componets/sideBar/SideBar'




const InicioScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startNewsImpacto())
        dispatch(startNewNews())

    }, [dispatch])


    return (
        <div className='container'>
            <Impacto />

            <div className='row'>
                <div className='col-lg-9  col-md-12'>
                    <NewNews />
                </div>
                <div className='col-lg-3  col-md-12'>
                    <SideBar />
                </div>

            </div>

        </div>

    )
}

export default InicioScreen