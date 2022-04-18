import React, { useContext, useState } from 'react'
import { FormControl, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../app'
import { axiosClient } from '../../api/api.config'

export default function AuthPage() {
  const auth = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')

  const onSubmit = () => {
    axiosClient.post('/users/sign_in', { user: { login, password } })
      .then((response) => {
        auth.setAuth({
          ...auth,
          isLoading: false,
          isSignedIn: true,
          user: response.data.user
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Grid
      container
      alignItems='center'
      direction='column'
      className='registr'
    >
      <Grid item>
        <h1 className='mainTxt'>Sign in</h1>
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
      <Grid item marginTop={10.7}>
        <button className='regBtn' onClick={onSubmit}>Sign in</button>
      </Grid>
      <Grid container justifyContent='center' marginTop={20}>
        <Grid item>
          <NavLink to='/registration' className='defaultTxt'>Sign up</NavLink>
        </Grid>
      </Grid>
    </Grid>
  )
}
