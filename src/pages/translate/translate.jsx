import React, { useEffect, useState } from 'react'
import './translate.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData, Logout, UpdateUser } from '../../actionsTypes/userAction'
import { Link, useNavigate } from 'react-router-dom'
import Person from '@mui/icons-material/Person'
import Sign from '../../assets/individial_signs/a.png'
import Side from '../../assets/Side.png'
// import a from '../../assets/individial_signs/a.png'
// import b from '../../assets/b.png'
// import c from '../../assets/c.png'
import getList from './list'
import { AiOutlineArrowRight } from 'react-icons/ai'

const alphabetList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const Translate = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((stata) => stata.userReducer.userData)
  const [translation, setTranslation] = useState('')
  const [showSign, setshowSign] = useState(false)
  const [signsList, setSignList] = useState([])
  const UserName = localStorage.getItem('user')
  const [InputValue, setInputValue] = useState('')
  useEffect(() => {
    dispatch(GetUserData(UserName))
  }, [])
  const Navigator = useNavigate()
  useEffect(() => {
    if (translation.length == 0) {
      // setshowSign(false)
      setSignList([])
    }
  }, [translation])

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

  const filterTranslations = () => {
    console.log('its Work')
    let listArray = []
    setSignList([])
    const updatedString = InputValue
    updatedString.split('').map((alphabet) => {
      const index = alphabetList.findIndex(
        (alpha) => alpha.toLocaleLowerCase() == alphabet.toLocaleLowerCase()
      )
      listArray.push(getList()[index])
    })
    setSignList(listArray)
    setTranslation(InputValue)
  }

  return (
    <>
      <div>
        <div className='navBar'>
          <div className='txtIConDiv'>
            <h1>Lost in Translate</h1>
            <div className='navIcon'>
              <p>{localStorage.getItem('user')}</p>
              <img
                src={"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"}
                width={"auto"}
                className="minilogo"
                height={60}
                onClick={() => Navigator('/profile')}
              />
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('user')
                Navigator('/')
                dispatch(Logout())
              }}
              className='btnLogout'
            >
              LogOut
            </button>
          </div>
        </div>
        <div className='secMain'>
          <div className='right'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className='translateBox slide-right'
            >
              <div className='transHedMain'>
                <div className='heading'>
                  <h1>Translate page</h1>
                </div>

                <div className='texInput'>
                  <input
                    className='nameInput12'
                    type='text'
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      setTranslation(e.target.value)
                    }}
                    placeholder='Enter your name'
                  />
                  <AiOutlineArrowRight
                    onClick={() => {
                      getTranslation(), filterTranslations()
                    }}
                    className='inputIcon'
                    color='white'
                  />
                </div>

                <div className='text' name=''>
                  {signsList.length > 0 &&
                    signsList.map((path, ind) => {
                      return (
                        <React.Fragment key={ind}>
                          {path == undefined ? null : (
                            <img src={path} width={50} height={50} />
                          )}
                        </React.Fragment>
                      )
                    })}
                </div>
              </div>
              <button className='transBtn'>Translate</button>
            </form>
          </div>
        </div>
        <div className='footerMain'></div>
      </div>
    </>
  )
}

export default Translate
