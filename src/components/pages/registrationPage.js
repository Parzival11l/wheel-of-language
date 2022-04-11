import React, { Component } from 'react'
import { FormControl, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './pagescss/registrationPage.css'

class RegistrationPage extends Component {
  render() {
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
          <input type='text' placeholder='email' className='input'/>
          <input type='text' placeholder='password' className='input'/>
          <input type='text' placeholder='password' className='input'/>
          </FormControl>
        </Grid>
        <Grid item>
          <button className='regBtn'>Registration</button>
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
