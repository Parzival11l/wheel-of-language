import React, { useContext, useState } from 'react'
import { FormControl, Grid, Button } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'

import './pagescss/registrationPage.css'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'

export default function RegistrationPage() {

  const auth = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')
  const navigate = useNavigate()

  const onSubmit = () => {
    axiosClient.post('/users', { user: { login, password } })
      .then((response) => {
        auth.setAuth({
          ...auth,
          isLoading: false,
          isSignedIn: true,
          user: response.data.user
        })
        navigate('/personal')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  console.log(auth.user)
  return (
    <Grid
      container
      alignItems='center'
      direction='column'
      className='registr'
    >
      <Grid item>
        <h1 className='mainTxt'>Registration</h1>
      </Grid>
      <Grid item>
        <FormControl>
          <input
            type='text'
            value={login}
            placeholder='login'
            className='input'
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type='password'
            value={password}
            placeholder='password'
            className='input'
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          className='regBtn'
          disabled={!password || !login}
          onClick={onSubmit}
        >
          Registration
        </Button>
      </Grid>
      <Grid container justifyContent='center' marginTop={20}>
        <Grid item>
          <NavLink to='/auth' className='defaultTxt'>Sign in</NavLink>
        </Grid>
      </Grid>
    </Grid>
  )
}

