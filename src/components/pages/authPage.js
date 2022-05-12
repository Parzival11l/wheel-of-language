import React, { useContext, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../app'
import { axiosClient } from '../../api/api.config'

import './pagescss/authPage.css'
import Swal from 'sweetalert2'
import chel2 from '../image/Screenshot 2022-05-10 at 18.14.37.png'
import styled from '@emotion/styled'


const Image = styled('img')`
  width: 80%;
  height: 90%;
`

export default function AuthPage() {

  const auth = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')
  const navigate = useNavigate()

  const onSubmit = () => {

    axiosClient.post('/users/sign_in', { user: { login, password } })
      .then((response) => {
        auth.setAuth({
          ...auth,
          isLoading: false,
          isSignedIn: true,
          user: response.data.user
        })
        Swal.fire(
          'Good job!',
          'Welcome!',
          'success'
        )
        navigate('/personal')
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
  }

  return (
    <Grid container alignItems='center'>

      <Grid item xs={5} marginTop={15}>
        <Image alt='' src={chel2}/>
      </Grid>
      <Grid item xs={3}>
        <Grid container justifyContent='center' alignItems='center' spacing={4}>
          <Grid item xs={12}>
            <Typography fontSize={60} color='white' align='center'>Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              type='text'
              value={login}
              placeholder='login'
              className='input'
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type='password'
              value={password}
              placeholder='password'
              className='input'
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Button onClick={onSubmit} variant="contained">Sign In</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontSize={30}
              color='white'
              align='center'
              onClick={() => {
                navigate('/registration')
              }}
            >
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
