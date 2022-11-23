import React from 'react'
import "./login.css"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Login = () => {
  return (
    <div className="mainTranslate">
    <div className="nabBar1"> <h1>Lost in Translate</h1></div>

    <div className="secMain">
     <div className="left"></div>
     <div className="right">

     <div className="inputMain">
       <input className="nameInput" type="text" placeholder="Enter your name" />
       <div className="icon">
       <ArrowCircleRightIcon className="arrowIcon" />
       </div>
     </div>

     </div>
    </div>
    <div className="footerMain"></div>

   </div>
  )
}

export default Login