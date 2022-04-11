import React from 'react'
import MyBtn from '../myBtn'
import { useNavigate } from 'react-router-dom'

function ErrorTest() {
  let navigate = useNavigate();

  function logIn() {
    navigate("/auth");
  }

  return (
    <div>
      <h1 className='defaultTxt'>Let's go try to login in</h1>
      <MyBtn onClickFunction={logIn} value='Login In' />
    </div>
  )
}

export default ErrorTest
