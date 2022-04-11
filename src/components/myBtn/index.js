import React, { Component } from 'react'
import { Grid } from '@mui/material'


export default class MyBtn extends Component{



  render() {

  const { onClickFunction, value } = this.props

    return (
    <Grid container alignItems='center' justifyContent='center'>
      <button onClick={onClickFunction} className='regBtn'>{value}</button>
    </Grid>
  )
  }


}


