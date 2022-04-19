import React from 'react'
import { Grid } from '@mui/material'
import './myBtn.css'

export default function MyBtn( onClickFunction, value) {

    return (
    <Grid container alignItems='center' justifyContent='center'>
      <button onClick={onClickFunction} className='myBtn'>{value}</button>
    </Grid>
  )
}


