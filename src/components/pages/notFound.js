import React from 'react'
import { Grid } from '@mui/material'

export default function NotFound() {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item marginTop={50}>
        <h1 className='mainTxt'>There are no such pages</h1>
      </Grid>
    </Grid>
  )
}
