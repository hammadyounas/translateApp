import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import './login.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { addUser, GetUsers } from '../../actionsTypes/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import helloIcon from '../../assets/helloIcon.png'

const Login = () => {
  const [userInputValue, setuserInputValue] = useState('')
  const Navigater = useNavigate()
  const { data } = useSelector((state) => state.userReducer.users)
  const AddUserData = useSelector((state) => state.userReducer.addUser)

  const dispatch = useDispatch()
  const UserName = localStorage.getItem('user')
  //  IF user login to naviagte to translations
  useEffect(() => {
    if (AddUserData.data) {
      Navigater('/translations')
    }
  }, [AddUserData])
  // Get all user
  useEffect(() => {
    dispatch(GetUsers())
  }, [])
  // if User already login navigate to translations
  useEffect(() => {
    if (UserName) {
      Navigater('/translations')
    }
  }, [])
  //Create_New_ User_Function
  const CreateNewUser = async () => {
    if (!userInputValue) {
      toast.error('Please provide a username.')
      return
    }
    const res = data.filter((val) => {
      return val.username == userInputValue
    })
    if (res.length > 0) {
      toast.error(`${userInputValue} already exists try again!`)
      setuserInputValue('')
      return
    } else {
      dispatch(addUser(userInputValue))
    }
  }
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <div className='mainTranslate'>
        <div className='nabBar1'>
          {' '}
          <h1>Lost in Translate</h1>
        </div>
        <div className='secMain'>
          <div className='left'>
            <div className='imageDiv'>
              <img className='img1' src={helloIcon} alt='' />
            </div>
          </div>
          <div className='right'>
            <div className='inputMain'>
              <input
                className='nameInput'
                type='text'
                value={userInputValue}
                onChange={(e) => setuserInputValue(e.target.value)}
                placeholder='Enter your name'
              />
              <div className='icon'>
                <ArrowCircleRightIcon
                  onClick={CreateNewUser}
                  className='arrowIcon'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='footerMain'></div>
      </div>
    </>
  )
}

export default Login
