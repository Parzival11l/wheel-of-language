import React, { Component } from 'react'
import { FormControl, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

class AuthPage extends Component {
  render() {
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
            <input type='text' placeholder='email' className='input'/>
            <input type='text' placeholder='password' className='input'/>
          </FormControl>
        </Grid>
        <Grid item marginTop={10.7}>
          <button className='regBtn'>Sign in</button>
        </Grid>
        <Grid container justifyContent='center' marginTop={20}>
          <Grid item>
            <NavLink to='/registration' className='defaultTxt'>Sign up</NavLink>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default AuthPage
