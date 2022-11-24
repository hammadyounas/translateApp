import React, { useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTranslate from './ProfileTranslateHistory'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetUsers, Logout } from '../../actionsTypes/userAction'
import img2 from '../../assets/img2.png'

const profile = () => {
  const Navigater = useNavigate()
  const dispatch = useDispatch()
  const selec = useSelector((stata) => console.log(stata))

  useEffect(() => {
    dispatch(GetUsers())
  }, [])
  return (
    <>
      <ProfileHeader username={'hello'} />
      <div className='mainTrans'>
        <div className='innerDiv'>
          <div className='transTex'>
            <div className='transBox'>
              <textarea
                className='txtArea'
                name=''
                id=''
                cols='30'
                rows='10'
              ></textarea>
              {/* <div className="txtArea"></div> */}
              <div className='btnMain'>
                <div className='clearBtn'>
                  <button className='btnClear'>Clear</button>
                </div>
                <div className='logoutBtn'>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user')
                      Navigater('/')
                      dispatch(Logout())
                    }}
                    className='btnLogout'
                  >
                    LogOut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='iconImage'>
            <img className='image2' src={img2} alt='' />
          </div>
        </div>
      </div>
      <ProfileTranslate translate={'check'} />
    </>
  )
}

export default profile
