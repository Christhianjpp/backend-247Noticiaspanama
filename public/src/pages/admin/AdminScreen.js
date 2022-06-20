import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCategoryLoad } from '../../actions/category'
import { startLabelLoad } from '../../actions/label'
import useModal from '../../hooks/useModal'
import ListPost from './components/ListPost'
import NewsModal from './components/NewsModal'

import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth'

const AdminScreen = () => {
    const dispatch = useDispatch()
    const [isOpenModal, openModal, closeModal] = useModal()

    const { categories } = useSelector(state => state.category)
    const { labels } = useSelector(state => state.label)
    const { name } = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(startCategoryLoad())
        dispatch(startLabelLoad())
    }, [dispatch])

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div className='container-fluid admin'>



            <div className='row'>
                <div className='col-12 admin__user pt-4 pb-4' >
                    <div className='ms-4'> <i className="bi bi-person icons"></i><span className='ms-2'> {name} </span> </div>
                    <div className='ms-5 btn-logout'
                        onClick={handleLogout}
                    ><i className="bi bi-power icons"></i></div>
                </div>

                <div className='col-2 mt-2'>
                    <Link to='/' className='admin__link' ><i className="bi bi-house-door"></i>Inicio</Link>

                </div>


                <div className='col-10 admin__children'>
                    <button type="button" className='btn btn-primary mb-4 mt-3' data-toggle="modal" data-target="#exampleModal"
                        onClick={openModal}
                    >Nueva Publicación</button>

                    <ListPost
                        openModal={openModal}
                    />
                </div>
            </div>
            <NewsModal
                isOpen={isOpenModal}
                close={closeModal}
                categories={categories}
                labels={labels}
            />
        </div>
    )
}

export default AdminScreen