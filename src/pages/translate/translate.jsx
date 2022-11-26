import React, { useEffect, useState } from 'react'
import './translate.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData, UpdateUser } from '../../actionsTypes/userAction'
import { Link, useNavigate } from 'react-router-dom'
import Person from '@mui/icons-material/Person'
import Sign from '../../assets/individial_signs/a.png'
import Side from '../../assets/Side.png'
// import a from '../../assets/individial_signs/a.png'
// import b from '../../assets/b.png'
// import c from '../../assets/c.png'
import getList from './list'
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
  useEffect(() => {
    dispatch(GetUserData(UserName))
  }, [])
  const Navigator = useNavigate()
  useEffect(() => {
    if (translation.length == 0) {
      setshowSign(false)
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

  const filterTranslations = (e) => {
    let listArray = []
    setSignList([])
    const updatedString = e.target.value
    updatedString.split('').map((alphabet) => {
      const index = alphabetList.findIndex(
        (alpha) => alpha.toLocaleLowerCase() == alphabet.toLocaleLowerCase()
      )
      listArray.push(getList()[index])
    })
    setSignList(listArray)
    setTranslation(e.target.value)
  }

  return (
    <>
      <div>
        <div className='navBar'>
          <div className='txtIConDiv'>
            <h1>Lost in Translate</h1>
            <div className='navIcon'>
              <img
                src={Side}
                width='130'
                height={60}
                onClick={() => Navigator('/profile')}
              />
              <p>{localStorage.getItem('user')}</p>
            </div>
          </div>
        </div>
        <div className='secMain'>
          <div className='right'>
            <form
              onSubmit={(e) => {
                getTranslation(), e.preventDefault()
              }}
              className='translateBox'
            >
              <div className='transHedMain'>
                <div className='heading'>
                  <h1>Translate page</h1>
                </div>

                <div className='texInput'>
                  <input
                    value={translation}
                    onChange={filterTranslations}
                    className='nameInput12'
                    type='text'
                    placeholder='Enter your name'
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
