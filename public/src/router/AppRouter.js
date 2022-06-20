import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import AdminRouter from './AdminRouter'
import AuthRouter from './AuthRouter'
import DashboardRouter from './DashboardRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
    const dispatch = useDispatch()

    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<h4>Espere...</h4>)
    }

    return (
        <BrowserRouter>
            <Routes>



                <Route path='/*' element={<DashboardRouter />} />


                <Route path='/auth/*' element={< PublicRouter user={!!uid}>
                    <AuthRouter />
                </PublicRouter>} />

                <Route path='/admin/*' element={<PrivateRouter user={!!uid}>
                    <AdminRouter />
                </PrivateRouter>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter