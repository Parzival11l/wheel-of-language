import React, { Component } from 'react'
import { Grid } from '@mui/material'

import './pagescss/homePage.css'

class HomePage extends Component {
  render() {
    return (
      <Grid container alignItems='center' justifyContent='center' marginTop={50}>
        <Grid item>
          <h1 className='mainTxt'>Welcome to Wheel of Language</h1>
          <Grid item>
            <p align='center' className='defaultTxt'>Here you can assess your English</p>
          </Grid>
          <Grid item>
            <p align='center' className='defaultTxt'>Click on "Test" to go to the test </p>
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

export default HomePage
