import React, { useEffect, useState } from 'react'
import './translate.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData, UpdateUser } from '../../actionsTypes/userAction'
import { useNavigate } from 'react-router-dom'
import Person from '@mui/icons-material/Person'
import Sign from '../../assets/SIGN.png'
import Side from '../../assets/Side.png'


const Translate = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((stata) => stata.userReducer.userData)
  const [translation, setTranslation] = useState('')
  const [showSign, setshowSign] = useState(false)
  const UserName = localStorage.getItem('user')
  const Navigater = useNavigate()
  useEffect(() => {
    dispatch(GetUserData(UserName))
  }, [])
  console.log(data)
  
  useEffect(() => {
   if(translation.length == 0){
    setshowSign(false)
   }
  } ,[translation])

  const getTranslation = () => {
    if (translation) {
      data.translate.push(translation)
      setshowSign(true)
      dispatch(UpdateUser(data))
    } else {
      setshowSign(false)
      return
    }
  }

  return (
    <>
      <div>
        <div className='navBar'>
          <div className='txtIConDiv'>
            <h1>Lost in Translate</h1>
            <div className='navIcon'>
            <div><p>hello</p></div>
            <img  src={Side} width="130" height={60} onClick={() => Navigater('/profile')}/>
            <p>{localStorage.getItem("user")}</p>
            </div>
          </div>
        </div>
        <div className='secMain'>
          <div className='right'>
            <form onSubmit={e => {
              getTranslation(),
              e.preventDefault()
            }} className='translateBox'>
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

                <div className='text' name=''>
                  {showSign && <img src={Sign} width='100%' height='100%' />}
                </div>
              </div>
              <button  className='transBtn'>
                Translate
              </button>
            </form>
          </div>
        </div>
        <div className='footerMain'></div>
      </div>
    </>
  )
}

export default Translate
