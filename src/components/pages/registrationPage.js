import React, { Component } from 'react'
import { FormControl, Grid, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './pagescss/registrationPage.css'
import { axiosClient } from '../../api/api.config'

class RegistrationPage extends Component {

  state = {
    login: '',
    password: ''
  }

  render() {



    const { login, password } = this.state



    const onSubmit = () => {
      axiosClient.post('/users', {
        user: {
          login,
          password
        }
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
          <h1 className='mainTxt'>Registration</h1>
        </Grid>
        <Grid item>
          <FormControl>
          <input
            type='text'
            placeholder='login'
            className='input'
            value={login}
            onChange={(event) => this.setState({ login: event.target.value })}
          />
          <input
            type='password'
            placeholder='password'
            className='input'
            value={password}
            onChange={(event) => this.setState({ password: event.target.value })}
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
}

export default RegistrationPage
