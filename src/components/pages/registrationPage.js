import React, { useContext, useState } from 'react'
import { Grid, Button, Typography, TextField, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'
import Swal from 'sweetalert2'

import chel2 from '../image/Screenshot 2022-05-10 at 18.14.37.png'
import styled from '@emotion/styled'

import './pagescss/registrationPage.css'

const Image = styled('img')`
  width: 80%;
  height: 90%;
`

export default function RegistrationPage() {

  const auth = useContext(AuthContext)
  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')
  const navigate = useNavigate()

  function onClick(nav) {
    navigate(`/${nav}`)
  }

  const onSubmit = () => {
    axiosClient.post('/users', { user: { login, password } })
      .then((response) => {
        localStorage.setItem('JWT', response.headers.authorization)
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
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
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
            <Typography fontSize={60} color='white' align='center'>Registration</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className='input'
              value={login}
              required
              onChange={(e) => setLogin(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type='password'
              className='input'
              value={password}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Button
                variant="contained"
                disabled={!password || !login}
                onClick={onSubmit}
              >
                Registration
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontSize={30}
              color='white'
              align='center'
              onClick={() => {
                onClick('auth')
              }}
            >
              Sign in
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

