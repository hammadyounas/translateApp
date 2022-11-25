import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTranslate from './ProfileTranslateHistory'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetUsers, Logout } from '../../actionsTypes/userAction'
import img2 from '../../assets/Profile.png'



const profile = () => {
  const Navigater = useNavigate()
  const dispatch = useDispatch()
  const { data } = useSelector((stata) => stata.userReducer.userData)
  const [userAllTranslation, setuserAllTranslation] = useState(data.translate)
  useEffect(() => {
    dispatch(GetUsers())
  }, [])
  const ClearAll = () => {
    setuserAllTranslation([])
  }
  const oneClear = (ind) => {
    userAllTranslation.splice(ind,1)
    setuserAllTranslation([...userAllTranslation])
  }
  return (
    <>
      <ProfileHeader username={'hello'} />
      <div className='mainTrans'>
        <div className='innerDiv'>
          <div className='transTex'>
            <div className='transBox'>
              <div
                className='list_Parent'
                name=''
                id=''
                cols='30'
                rows='10'
              >
               {
              userAllTranslation.map((val,ind) => {
                  return(
                    <div key={ind} className="list">
                     <p>{val}</p>
                     <button onClick={() => oneClear(ind)}>delete</button>
                    </div>
                    )
                })
               }
              </div>
              <div className='btnMain'>
                <div className='clearBtn'>
                  <button className='btnClear' onClick={ClearAll}>Clear</button>
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
