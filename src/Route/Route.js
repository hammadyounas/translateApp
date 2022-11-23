import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/login'
import Translate from '../pages/translate/translate'
import Profile from '../pages/profile/profile';
import ProtectedRoute from './ProtectedRoute'

const RouterCmp = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Login />}></Route>
         <Route path='/trans' element={<Translate />}></Route>
         <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default RouterCmp