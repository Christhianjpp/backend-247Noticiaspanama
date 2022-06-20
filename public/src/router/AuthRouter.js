import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/auth/LoginScreen'
import RegisterScreen from '../pages/auth/RegisterScreen'

const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/login' element={<LoginScreen />} />

            </Routes>
        </div>
    )
}

export default AuthRouter