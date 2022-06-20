import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({ children, user }) => {


    return user
        ? <Navigate to='/admin' />
        : children
}

export default PublicRouter