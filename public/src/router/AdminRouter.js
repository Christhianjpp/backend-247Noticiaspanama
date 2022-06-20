import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminScreen from '../pages/admin/AdminScreen'

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminScreen />} />
            </Routes>
        </div>
    )
}

export default AdminRouter