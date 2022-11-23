import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import './translate.scss'
import "./translate.css"
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Translate = () => {
  const apiUrl = 'http://localhost:8080/translations'
  const [InputValue, setInputValue] = useState('')
  const apiKey = "25bdbc7e-a2ac-464b-83f5-d9eed36a6303"

  const createHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    }
  }
  const createUser = async (username) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({
          username,
          translate: [],
        }),
      })
      console.log(response, 'create')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    axios.get(apiUrl)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])
  return (
    <>
      <div>
        <div className="navBar">
          <div className="txtIConDiv">
            <h1>Lost in Translate</h1>
            <div className="navIcon"></div>
          </div>
        </div>
        <div className="secMain">
          <div className="left"></div>
          <div className="right">
            <div className="translateBox">
              <div className="transHedMain">

               <div className="heading"> <h1>Translate page</h1></div>
                
                   <textarea className="text" name="" id="" cols="30" rows="10"></textarea>
               


              </div>
                <button className="transBtn">Translate</button>

            </div>
          </div>
        </div>
        <div className="footerMain"></div>

      </div>
    </>
  )
}

export default Translate
