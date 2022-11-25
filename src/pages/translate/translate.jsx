import React, { useEffect, useState } from 'react'
import './translate.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData, UpdateUser } from '../../actionsTypes/userAction'
import { useNavigate } from 'react-router-dom'
import Person from '@mui/icons-material/Person'

const Translate = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((stata) => stata.userReducer.userData)
  const [translation, setTranslation] = useState('')
  const UserName = localStorage.getItem('user')
  const Navigater = useNavigate()
  useEffect(() => {
    dispatch(GetUserData(UserName))
  }, [])
  console.log(data)

  const getTranslation = () => {
    console.log('data', data)
    data.translate.push(translation)
    setTranslation('')
    dispatch(UpdateUser(data.translate))
  }

  return (
    <>
      <div>
        <div className='navBar'>
          <div className='txtIConDiv'>
            <h1>Lost in Translate</h1>
            <div className='navIcon'>
              <Person onClick={() => Navigater('/profile')} />
            </div>
          </div>
        </div>
        <div className='secMain'>
          <div className='right'>
            <div className='translateBox'>
              <div className='transHedMain'>
                <div className='heading'>
                  <h1>Translate page</h1>
                </div>

                <div className='texInput'>
                  <input
                    value={translation}
                    onChange={(e) => setTranslation(e.target.value)}
                    className='nameInput12'
                    type='text'
                    placeholder='Enter your name'
                  />
                </div>

                <textarea
                  className='text'
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <button onClick={getTranslation} className='transBtn'>
                Translate
              </button>
            </div>
          </div>
        </div>
        <div className='footerMain'></div>
      </div>
    </>
  )
}

export default Translate
