import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTranslate from './ProfileTranslateHistory'
import "./profile.css"

const profile = () => {
  return (
    <>
      <ProfileHeader username={'hello'} />
      <div className='mainTrans'>
        <div className='innerDiv'>
          <div className='transTex'>
            <div className='transBox'>
              <div className='txtArea'></div>
              <div className='btnMain'>
                <div className='clearBtn'>
                  <button className='btnClear'>Clear</button>
                </div>
                <div className='logoutBtn'>
                  <button className='btnLogout'>LogOut</button>
                </div>
              </div>
            </div>
          </div>
          <div className='iconImage'></div>
        </div>
      </div>
      <ProfileTranslate translate={'check'} />
    </>
  )
}

export default profile
