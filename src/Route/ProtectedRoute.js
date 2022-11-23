import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const userName = localStorage.getItem('user')

const ProtectedRoute = () => {
  return userName ? <Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoute

