import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children, user }) => {

    return user
        ? children
        : <Navigate to='/auth/login' />
}

export default PrivateRouter