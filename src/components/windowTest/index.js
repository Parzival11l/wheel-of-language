import React, { Component } from 'react'
import { Grid } from '@mui/material'

import './windowTest.css'

class WindowTest extends Component {

  render() {

    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        className='testWindow'
      >
        <Grid item>
          {/*{currentPerson.name}*/}1
        </Grid>
        <Grid item>
          {/*{currentPerson.time}*/}2
        </Grid>
        <Grid item>
          {/*{currentPerson.resultat}*/}3
        </Grid>
      </Grid>
    )
  }
}

export default WindowTest
